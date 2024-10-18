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
    this.iframeSrc = `/html/${localStorage.machine}.html`
  }
}
</script>
