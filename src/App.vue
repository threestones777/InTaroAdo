<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav id="headHeight" class="navBg navbar navbar-expand-sm fixed-top navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="/image/154014.ico" width="32" />
          InTaroAdo</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link toHover" href="/">首页</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle toHover"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                精雕
              </a>
              <ul class="dropdown-menu" style="background-color: #910326">
                <li><a class="dropdown-item dropCss" @click="toJump('JDCarving')">技巧</a></li>
                <li><a class="dropdown-item dropCss" @click="toJump('JDCarvingImg')">图纸</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle toHover"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                三维 CAD
              </a>
              <ul class="dropdown-menu" style="background-color: #910326">
                <li><a class="dropdown-item dropCss" @click="toJump('3DCad')">技巧</a></li>
                <li><a class="dropdown-item dropCss" @click="toJump('3DCadModel')">模型</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle toHover"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                前端
              </a>
              <ul class="dropdown-menu" style="background-color: #910326">
                <li><a class="dropdown-item dropCss" @click="toJump('HtmlCssJs')">技巧</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div style="margin: 66px 10px 30px 10px">
    <RouterView />
  </div>
  <div id="footHeight" class="container-fluid footCss">
    <div>
      <img src="/image/154014.ico" width="32" />
      <div class="name">
        <p>InTaroAdo</p>
        <p>银塔热啊笃</p>
      </div>
    </div>
    <div>Copyright ©2025 InTaroAdo 版权所有</div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {}
  },
  mounted() {
    let allHeight = Number(window.innerHeight)
    let headHeight = Number(document.getElementById('headHeight')?.scrollHeight)
    let footHeight = Number(document.getElementById('footHeight')?.scrollHeight)
    localStorage.machineViewHeight = allHeight - headHeight - footHeight
  },
  methods: {
    toJump(target: any) {
      document.getElementById('navbarScroll')?.classList.remove('show')
      this.$router.push({ name: target })
    }
  }
}
</script>
<style scoped>
.navBg {
  background-color: #910326;
}
.footCss {
  color: #910326;
  text-align: center;
  padding: 5px;
  font-size: 14px;
}
.footCss img {
  position: relative;
  bottom: 11px;
}
.footCss .name {
  display: inline-block;
  padding-left: 5px;
}
.footCss p {
  padding: 0;
  margin: 0;
}
.dropCss {
  color: #fff;
}
.dropCss:hover {
  cursor: pointer;
  background-color: #910326;
  color: #ff7c00;
}
.toHover {
  color: #fff;
}
.toHover:hover {
  cursor: pointer;
  color: #ff7c00;
}
</style>
