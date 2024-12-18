<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="(item, index) in ebook" :key="index" class="col-sm-4" style="margin-top: 10px">
        <div class="card">
          <div class="card-body" style="color: #910326">
            <h5 class="card-title">
              <span class="nameClick" @click="openSkill(item)">{{ item.name }}</span>
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
            <div class="seeDetail" @click="openSkill(item)">
              查看详情<i class="bi bi-eye-fill"></i>
              <a :href="item.epubUrl">下载</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Base64 } from 'js-base64'
import ebook from '@/json/ebook.json'
export default {
  data() {
    return {
      item: '',
      ebook: [] as any
    }
  },
  methods: {
    openSkill(item: any) {
      // alert('敬请期待。。。')
      localStorage.epubName = Base64.encode(item.name)
      this.$router.push({ name: 'EBookView', query: { url: Base64.encode(item.name) } })
    }
  },
  mounted() {
    this.ebook = []
    this.ebook = ebook
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
