<template>
  <div class="row">
    <div v-for="(item, index) in imgArray" :key="index" class="col-sm-3">
      <div class="card cardPd">
        <div class="picture cardCss">
          <el-image :src="item.netUrl" fit="contain" />
        </div>
        <div class="card-body" style="color: #6a2c70">
          <h5 class="card-title">
            <span>{{ item.name }}</span>
            <i
              class="bi bi-eye-fill toSee"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            ></i>
          </h5>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <el-image style="width: 100px; height: 100px" :src="url" fit="contain" />
    </div>
  </div> -->
</template>

<script lang="ts">
// import jdShow from '@/json/jdShow.json'
import jdShow from '@/json/picShow.json'
export default {
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

<style scoped></style>
