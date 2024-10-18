<template>
  <div>
    <iframe :src="iframeSrc" frameborder="0" width="100%" height="600px"></iframe>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      iframeSrc: '/html/teapot.html' // 确保路径正确，且文件可访问
    }
  },
  created() {
    console.log(77777)
    console.log(this.$route.query.name)
    this.iframeSrc = `/html/${localStorage.machine}.html`
  }
}
</script>
