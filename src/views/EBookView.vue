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
      v-if="isLoading"
      style="position: absolute; bottom: 50%; left: 50%"
      class="d-flex justify-content-center"
    >
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
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
    <div style="height: 100%; display: flex; justify-content: space-between">
      <div class="action"><i class="pageTurning bi bi-arrow-90deg-left" @click="toEbook"></i></div>
      <div class="action">
        <i
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
          class="pageTurning bi bi-gear"
        ></i>
      </div>
      <div class="action"><i class="pageTurning bi bi-arrow-left-circle" @click="prev"></i></div>
      <div class="action"><i class="pageTurning bi bi-arrow-right-circle" @click="next"></i></div>
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
        <h4
          style="color: #910326; font-weight: bold"
          class="offcanvas-title"
          id="offcanvasExampleLabel"
        >
          目录
        </h4>
      </div>
      <div class="offcanvas-body">
        <ul>
          <li v-for="item in toc" :key="item.href">
            <a class="btn toc" role="button" data-bs-dismiss="offcanvas" @click="goTo(item)">{{
              item.label
            }}</a>
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
      ebookName: '',
      isLoading: true,
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
          console.log(localStorage[this.ebookName])
          this.book.rendition
            .display(
              this.locations.cfiFromPercentage(
                localStorage[this.ebookName] ? Number(localStorage[this.ebookName]) : 0
              )
            )
            .then(() => {
              this.isLoading = false
            })
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
      localStorage.setItem(this.ebookName, this.progress)
    },

    goTo(location) {
      console.log(this.book.rendition.currentLocation())
      this.rendition.display(location.href)
      this.rendition.next().then(() => {
        this.prev()
      })
    },
    scrollChange() {
      this.updateProgress()
    },
    toEbook() {
      this.$router.push({ name: 'EBook' })
    }
  },
  mounted() {
    this.ebookName = this.$route.query.url
    this.height = Number(localStorage.machineViewHeight) - 25
    this.initializeEpub()
    this.progress = Number(localStorage[this.ebookName])
    const scrollview = this.$refs['scrollview']
    // 添加滚动监听，该滚动监听了拖拽滚动条
    // 尾部的 true 最好加上，我这边测试没加 true ，拖拽滚动条无法监听到滚动，加上则可以监听到拖拽滚动条滚动回调
    scrollview.addEventListener('scroll', this.scrollChange, true)
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

.pageTurning {
  font-size: 20px;
  color: #910326;
  padding-top: 10px;
  display: inline-block;
}
.pageTurning:hover {
  cursor: pointer;
  color: #ff7c00;
}

.action {
  width: 25%;
  text-align: center;
}

.toc {
  color: #910326;
}

.toc:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #ff7c00;
}
</style>
