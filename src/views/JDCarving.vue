<template>
  <h2>精雕教程</h2>
  <div class="container-fluid">
    <div class="row">
      <div
        v-for="(item, index) in skillArray"
        :key="index"
        class="col-sm-4"
        style="margin-top: 10px"
      >
        <div class="card">
          <div class="card-body" style="color: #910326">
            <h5 class="card-title">
              <span class="nameClick" @click="openSkill(item.pdfUrl)">{{ item.name }}</span>
            </h5>
            <div class="row">
              <div
                class="col-sm-4 picture"
                :style="{
                  background: `url(${item.imageUrl}) no-repeat center center`
                }"
                style="background-size: contain"
              ></div>
              <div class="col-sm-8 longCss">{{ item.description }}</div>
            </div>
            <div class="seeDetail" @click="openSkill(item.pdfUrl)">
              查看详情<i class="bi bi-eye-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import jdSkill from '@/json/jdSkill.json'
import { Base64 } from 'js-base64'
export default {
  data() {
    return {
      skillArray: [] as any
    }
  },
  methods: {
    openSkill(url: any) {
      localStorage.url = url
      this.$router.push({ name: 'SkillView', query: { url: Base64.encode(url) } })
    }
  },
  mounted() {
    console.log(jdSkill)
    this.skillArray = []
    this.skillArray = jdSkill
  }
}
</script>
<style scoped>
.picture {
  height: 100px;
  text-align: center;
}
.longCss {
  height: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.seeDetail {
  text-align: right;
  font-weight: bold;
}
.nameClick:hover,
.seeDetail:hover {
  cursor: pointer;
  color: #ff7c00;
}
</style>
