<template>
  <div class="epub-reader">
    <div
      id="viewer"
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

    <!-- <div @click="prev" class="pageTurning" style="left: 0"></div>
    <div @click="next" class="pageTurning" style="right: 0"></div> -->
    <!-- 进度条 -->
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
    <!------------------ 抽屉 ------------------>
    <!-- 目录 -->
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">目录</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul>
          <li v-for="item in toc" :key="item.href">
            <a data-bs-dismiss="offcanvas" @click="goTo(item.href)">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 操作 -->
    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel"></h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body small">
        <!-- 操作按钮 -->
        <div style="position: absolute">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            目录
          </button>
          <button @click="prev">上一页</button>
          <button @click="next">下一页</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ePub from 'epubjs'

export default {
  name: 'EpubReader',
  data() {
    return {
      book: null,
      rendition: null,
      // currentLocation: null,
      progress: 0,
      height: 0,
      toc: []
    }
  },
  methods: {
    initializeEpub() {
      const bookPath = '/ebook/万劫.epub'

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
      this.rendition.display(localStorage.cfi)
      this.book.ready
        .then(() => {
          this.toc = this.book.navigation.toc
          return this.book.locations.generate()
        })
        .then((result) => {
          // result为book生成电子书的cfi的一个数组。与下面this.locations中的_locations属性一致
          this.locations = this.book.locations
          console.log('locations', this.locations)
          // bookAvailable标识，默认为false，为true时代表进度条可操作
          this.bookAvailable = true
        })
    },
    prev() {
      this.rendition.prev()
      console.log('this.book.locations')
      console.log(this.locations)
      console.log(this.book.rendition.currentLocation().start)
      this.progress = this.book.rendition.currentLocation().start.percentage * 100
      localStorage.cfi = this.book.rendition.currentLocation().start.cfi
      localStorage.epubPercent = this.progress
    },
    next() {
      this.rendition.next()
      console.log('this.book.locations')
      console.log(this.book.rendition.currentLocation().end)
      this.progress = this.book.rendition.currentLocation().end.percentage * 100
      localStorage.cfi = this.book.rendition.currentLocation().end.cfi
      localStorage.epubPercent = this.progress
    },

    goTo(location) {
      console.log(location)
      // console.log(this.book.rendition.currentLocation().start)
      // this.progress = this.book.rendition.currentLocation().start.percentage * 100
      // localStorage.epubPercent = this.progress
      this.rendition.display(location)
    }
  },
  mounted() {
    this.height = Number(localStorage.machineViewHeight) - 25
    this.initializeEpub()
    this.progress = Number(localStorage.epubPercent)
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
.progress-bar {
  position: absolute;
  width: 100%;
  height: 10px;
  background-color: #ccc;
}

.progress {
  height: 100%;
  background-color: #007bff;
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
