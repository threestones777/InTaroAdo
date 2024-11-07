<template>
  <div class="row">
    <div v-for="(item, index) in imgArray" :key="index" class="col-sm-3">
      <div class="card cardPd">
        <div
          class="picture cardCss"
          :style="{
            background: `url(${item.netUrl}) no-repeat center center`
          }"
          style="background-size: contain"
        ></div>
        <div class="card-body" style="color: #910326">
          <h5 class="card-title">
            <span>{{ item.name }}</span>
            <i
              class="bi bi-eye-fill toSee"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="openDialog(item)"
            ></i>
          </h5>
        </div>
      </div>
    </div>
  </div>
  <!-- 弹窗 -->
  <div
    class="modal fade"
    data-bs-backdrop="static"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content" v-if="isShow">
        <div class="modal-body" style="text-align: center">
          <img :src="dialogMsg.netUrl" alt="" />
        </div>
        <div class="modal-footer">
          <i class="bi bi-x-circle closeBtn" data-bs-dismiss="modal" @click="isShow = false"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import jdShow from '@/json/jdShow.json'
export default {
  data() {
    return {
      imgArray: [] as any,
      dialogMsg: {} as any,
      isShow: false
    }
  },
  created() {
    console.log(jdShow)
    this.imgArray = []
    this.imgArray = jdShow
  },
  methods: {
    openDialog(msg: any) {
      this.dialogMsg = {}
      this.dialogMsg = msg
      this.isShow = true
    }
  }
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
