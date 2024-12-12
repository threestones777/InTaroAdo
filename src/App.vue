<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav id="headHeight" class="navBg navbar navbar-expand-lg fixed-top navbar-dark">
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
              <a :class="{ isMe: isMe('Home') }" class="nav-link toHover" href="/">首页</a>
            </li>
            <li class="nav-item">
              <a
                :class="{ isMe: isMe('JDCarving') }"
                class="nav-link toHover"
                @click="toJump('JDCarving')"
                >精雕教程</a
              >
            </li>
            <li class="nav-item">
              <a
                :class="{ isMe: isMe('JDCarvingImg') }"
                class="nav-link toHover"
                @click="toJump('JDCarvingImg')"
                >精雕图</a
              >
            </li>
            <li class="nav-item">
              <a :class="{ isMe: isMe('3DCad') }" class="nav-link toHover" @click="toJump('3DCad')"
                >三维教程</a
              >
            </li>
            <li class="nav-item">
              <a
                :class="{ isMe: isMe('3DCadModel') }"
                class="nav-link toHover"
                @click="toJump('3DCadModel')"
                >三维模型</a
              >
            </li>
            <li class="nav-item">
              <a
                :class="{ isMe: isMe('HtmlCssJs') }"
                class="nav-link toHover"
                @click="toJump('HtmlCssJs')"
                >前端教程</a
              >
            </li>
            <li class="nav-item">
              <a :class="{ isMe: isMe('EBook') }" class="nav-link toHover" @click="toJump('EBook')"
                >电子书</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div style="margin: 66px 10px 30px 10px">
    <RouterView />
  </div>
  <div v-if="isShow" id="footHeight" class="container-fluid footCss">
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
    return {
      routeName: 'Home',
      isShow: true
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        console.log(8888888888)
        console.log(route.name)
        this.routeName = route.name
        this.isShow =
          route.name !== 'SkillView' && route.name !== 'Machine' && route.name !== 'EBookView'
      },
      immediate: true
    }
  },
  mounted() {
    let allHeight = Number(window.innerHeight)
    let headHeight = Number(document.getElementById('headHeight')?.scrollHeight)
    let footHeight = Number(document.getElementById('footHeight')?.scrollHeight)
    localStorage.machineViewHeight = allHeight - headHeight - footHeight
  },
  methods: {
    isMe(str) {
      return this.routeName === str
    },
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
.isMe {
  font-weight: bold;
  color: #ff7c00;
}
</style>
