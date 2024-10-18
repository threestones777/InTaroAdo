<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navBg navbar navbar-expand-sm fixed-top navbar-dark">
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
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">精雕</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                机械
              </a>
              <ul class="dropdown-menu" style="background-color: #6a2c70">
                <li>
                  <a class="dropdown-item dropCss" href="/Machine">SolidWorks</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div style="margin-top: 66px">
    <RouterView />
  </div>
  <div class="container-fluid footCss">
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

<style scoped>
.navBg {
  background-color: #6a2c70;
}
.footCss {
  background-color: #6a2c70;
  color: #fff;
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
  background-color: #6a2c70;
  color: #ff7c00;
}
</style>
