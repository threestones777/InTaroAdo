<template>
  <!-- 图片预览 -->
  <div class="seePosition">
    <div class="tdesign-demo-image-viewer__base">
      <t-image-viewer mode="modal" :images="[{ mainImage: url, download: false }]">
        <template #trigger="{ open }">
          <div class="tdesign-demo-image-viewer__ui-image">
            <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
              <i class="bi bi-eye-fill toSee"></i>
            </div>
          </div>
        </template>
      </t-image-viewer>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>
<style scoped>
.seePosition {
  display: inline-block;
  position: relative;
  top: 5px;
}
.toSee:hover {
  cursor: pointer;
  color: #ff7c00;
}
.toSee {
  font-size: 24px;
  position: relative;
  top: 3px;
  left: 3px;
  color: #910326;
}
.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 32px;
  height: 32px;
}
</style>
