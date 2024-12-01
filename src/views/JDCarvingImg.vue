<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="(item, index) in imgArray" :key="index" class="col-sm-3">
        <div class="card cardPd">
          <div
            class="picture cardCss"
            :style="{
              background: `url(${item.imageUrl}) no-repeat center center`
            }"
            style="background-size: contain"
          ></div>
          <div class="card-body" style="color: #910326">
            <h5 class="card-title" style="white-space: nowrap">
              <span>{{ item.name }}</span>
              <!-- 图片预览 -->
              <ImageView :url="item.imageUrl"></ImageView>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import jdShow from '@/json/jdShow.json'
import ImageView from '../components/ImageView.vue'
export default {
  components: {
    ImageView
  },
  data() {
    return {
      imgArray: [] as any
    }
  },
  created() {
    console.log(jdShow)
    this.imgArray = []
    this.imgArray = jdShow
  },
  methods: {}
}
</script>

<style scoped>
.picture {
  height: 300px;
  margin-bottom: 10px;
}
.cardPd {
  padding: 10px;
  margin-top: 10px;
  background-image: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4);
}
.cardCss {
  margin-top: 12px;
}
.toSee {
  font-size: 24px;
  position: relative;
  top: 3px;
  left: 3px;
  color: #910326;
}
.closeBtn {
  font-size: 32px;
  color: #910326;
}
.closeBtn:hover,
.toSee:hover {
  cursor: pointer;
  color: #ff7c00;
}
</style>
