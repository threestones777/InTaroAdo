<template>
  <vue-office-docx :src="docx" @rendered="renderedHandler" @error="errorHandler" />
</template>

<script>
//引入VueOfficeDocx组件
import VueOfficeDocx from '@vue-office/docx'
//引入相关样式
import '@vue-office/docx/lib/index.css'
import { Base64 } from 'js-base64'
export default {
  components: {
    VueOfficeDocx
  },
  data() {
    return {
      docx: '' //设置文档网络地址，可以是相对地址
    }
  },
  mounted() {
    console.log(this.$route.query.url)
    if (this.$route.query.url) {
      this.docx = Base64.decode(this.$route.query.url)
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
