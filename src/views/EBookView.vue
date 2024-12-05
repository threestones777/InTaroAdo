<template>
  <div class="epub-reader">
    <div
      id="viewer"
      ref="scrollview"
      class="epub-viewer"
      :style="{
        height: height + 'px'
      }"
    ></div>
    <div
      class="container-fluid"
      style="position: absolute; top: 0"
      :style="{
        height: height + 'px'
      }"
    >
      <div style="height: 100%; display: flex; justify-content: space-between">
        <div class="pageTurning" style="width: 25%" @click="prev"></div>
        <div style="width: 25%">
          <div
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
            class="action"
          ></div>
        </div>
        <div class="pageTurning" style="width: 25%" @click="next"></div>
      </div>
    </div>
    <!-- 进度条 -->
    <div
      class="progress"
      role="progressbar"
      aria-label="Info example"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="progress-bar bg-info text-dark" :style="{ width: progress * 100 + '%' }"></div>
    </div>
    <!------------------ 抽屉 ------------------>
    <!-- 目录 -->
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      style="width: 70%"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">目录</h5>
      </div>
      <div class="offcanvas-body">
        <ul>
          <li v-for="item in toc" :key="item.href">
            <a data-bs-dismiss="offcanvas" @click="goTo(item)">{{ item.label }}</a>
          </li>
        </ul>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          style="position: absolute; bottom: 1%; right: 5%"
        ></button>
      </div>
    </div>
    <!-- 操作 -->
    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
      style="height: 10%"
    >
      <div class="offcanvas-body small">
        <!-- 操作按钮 -->
        <div style="position: absolute">
          <button
            class="btn btn-outline-info"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i class="bi bi-list-ol">目录</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import ePub from 'epubjs'

export default {
  name: 'EpubReader',
  data() {
    return {
      book: null,
      rendition: null,
      navigation: null,
      progress: 0,
      height: 0,
      toc: []
    }
  },
  methods: {
    initializeEpub() {
      console.log(Base64.decode(this.$route.query.url))
      const bookPath = `${Base64.decode(this.$route.query.url)}`

      this.book = ePub(bookPath)
      this.rendition = this.book.renderTo('viewer', {
        allowScriptedContent: true,
        flow: 'paginated', //scrolled-doc 滚动 paginated 分页
        manager: 'continuous',
        snap: true,
        width: '100%',
        height: '100%'
      })
      // 翻页关键在于 flow: "paginated" 、 manager: "continuous" 和 snap: true。
      this.book.ready
        .then(() => {
          this.navigation = this.book.navigation
          this.toc = this.book.navigation.toc
          return this.book.locations.generate()
        })
        .then((result) => {
          // result为book生成电子书的cfi的一个数组。与下面this.locations中的_locations属性一致
          this.locations = this.book.locations

          // bookAvailable标识，默认为false，为true时代表进度条可操作
          this.bookAvailable = true
          this.book.rendition.display(
            this.locations.cfiFromPercentage(Number(localStorage.progress))
          )
        })
    },
    prev() {
      if (this.rendition) {
        this.rendition.prev().then(() => {
          this.updateProgress()
        })
      }
    },
    next() {
      if (this.rendition) {
        this.rendition.next().then(() => {
          this.updateProgress()
        })
      }
    },
    updateProgress() {
      this.bookAvailable = true
      // 获得当前章节的百分比并设置 保留6位小数
      const currentLocation = this.book.rendition.currentLocation()
      this.progress = currentLocation.start.percentage
      localStorage.progress = this.progress
    },

    goTo(location) {
      console.log(this.book.rendition.currentLocation())
      this.rendition.display(location.href)
      this.rendition.next().then(() => {
        this.prev()
      })
    }
  },
  mounted() {
    this.height = Number(localStorage.machineViewHeight)
    this.initializeEpub()
    this.progress = Number(localStorage.progress)
  }
}
</script>
<style scoped>
/* 样式可以根据需求自行修改 */
.epub-reader {
  position: relative;
  width: 100%;
  height: 100%;
}

.epub-viewer {
  position: relative;
  width: 100%;
  height: 500px;
}
.action {
  width: 100px;
  height: 100px;
  position: relative;
  top: 40%;
  margin: 0 auto;
}

.pageTurning {
  width: 25%;
  height: 100%;
}

.toc {
  position: absolute;
  top: 90%;
  left: 50%;
  width: 50%;
  max-height: 20%;
  overflow: auto;
  background-color: #f8f8f8;
  border-top: 1px solid #ccc;
  padding: 10px;
}

.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc li {
  margin-bottom: 5px;
}

.toc a {
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
}

.toc a:hover {
  text-decoration: underline;
}
</style>
<!-- var book = Epub('/ebook/周易悬象·道德悬解.epub') -->
