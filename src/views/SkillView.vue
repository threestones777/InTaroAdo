<template>
  <div>
    <iframe style="width: 100%" :height="viewHeight" :src="pdfUrl"></iframe>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
export default {
  data() {
    return {
      viewHeight: 500,
      pdfUrl: '' //设置文档网络地址，可以是相对地址
    }
  },
  mounted() {
    document.documentElement.scrollTop = 0
    this.viewHeight = Number(localStorage.machineViewHeight) + 25
    if (this.$route.query.url) {
      this.pdfUrl = `/pdf/web/viewer.html?file=${Base64.decode(this.$route.query.url)}`
    } else {
      this.$router.push({ name: 'JDCarving' })
    }
  },
  methods: {
    renderedHandler() {
      console.log('渲染完成')
    },
    errorHandler() {
      console.log('渲染失败')
    }
  }
}
</script>
<style lang="css" scoped></style>
