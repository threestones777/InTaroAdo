<template>
  <div>
    <iframe :src="iframeSrc" frameborder="0" width="100%" :height="viewHeight"></iframe>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      viewHeight: 500,
      iframeSrc: '/html/teapot.html' // 确保路径正确，且文件可访问
    }
  },
  created() {
    console.log('9999999999999')
    console.log(this.$route.query.name)
    this.viewHeight = Number(localStorage.machineViewHeight) - 60
    this.iframeSrc = `/html/${this.$route.query.name ? this.$route.query.name : 'teapot'}.html`
  }
}
</script>
