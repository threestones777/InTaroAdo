<script setup lang="ts"></script>

<template>
  <div class="container-fluid">
    <!-- 精雕 -->
    <div class="row">
      <div class="col-sm-6">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div class="carousel-inner">
            <div
              v-for="(item, index) in jdArray"
              :key="index"
              :class="{ active: item.isActive }"
              class="carousel-item"
            >
              <div
                class="picture d-block w-100"
                :style="{
                  background: `url(${item.netUrl}) no-repeat center center`
                }"
                style="background-size: contain"
              >
                <i
                  class="bi bi-eye-fill carouselToSee"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="openDialog(item)"
                ></i>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <i class="bi bi-chevron-left iconCss"></i>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <i class="bi bi-chevron-right iconCss"></i>
          </button>
        </div>
      </div>
      <div class="col-sm-6 txtCss">
        <h3>浮雕</h3>
        <p>
          浮雕是雕刻的一种，艺术家在一块平板上将他要塑造的形象雕刻出来，使它脱离原来材料的平面。浮雕的材料有石头、木头、象牙和金属等，一般分为浅浮雕、高浮雕和凹雕3种。浮雕是雕塑与绘画结合的产物，用压缩的办法来处理对象，靠透视等因素来表现三维空间，并只供一面或两面观看。由于其压缩的特性，所占空间较小，所以适用于多种环境的装饰。
        </p>
      </div>
    </div>
    <!-- CAD -->
    <hr color="#910326" size="5" />
    <div class="row">
      <div class="col-sm-6 txtCss">
        <h3>三维 CAD</h3>
        <p>
          三维
          CAD，即三维计算机辅助设计，是一种设计和技术文档编制技术，它使用自动化的流程替代手动制图。三维
          CAD软件常为建筑师、工程师和其他专业人员所用，可在计算机上以三维方式使用一组点精确地表示和可视化展示对象。帮助用户探索并分享创意、直观展示概念并在设计被制作成实物之前对设计效果进行模拟。
        </p>
      </div>
      <div class="col-sm-6">
        <div
          id="carouselInterval"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div class="carousel-inner">
            <div
              v-for="(item, index) in cadArray"
              :key="index"
              :class="{ active: item.isActive }"
              class="carousel-item"
            >
              <div
                class="picture d-block w-100"
                :style="{
                  background: `url(${item.netUrl}) no-repeat center center`
                }"
                style="background-size: contain"
              >
                <i class="bi bi-eye-fill carouselToSee" @click="toSeeMachine(item.click)"></i>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselInterval"
            data-bs-slide="prev"
          >
            <i class="bi bi-chevron-left iconCss"></i>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselInterval"
            data-bs-slide="next"
          >
            <i class="bi bi-chevron-right iconCss"></i>
          </button>
        </div>
      </div>
    </div>
    <hr class="hr-double-arrow" />
    <!-- 各种图片 -->
    <div class="row">
      <div v-for="(item, index) in picArray" :key="index" class="col-sm-3">
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
  </div>
</template>
<script lang="ts">
import jsonData from '@/json/carousel.json'
import picData from '@/json/picShow.json'
export default {
  data() {
    return {
      jdArray: [] as any,
      cadArray: [] as any,
      picArray: [] as any,
      dialogMsg: {} as any,
      isShow: false
    }
  },
  created() {
    this.jdArray = []
    this.cadArray = []
    this.picArray = []
    this.jdArray = jsonData[0]
    this.cadArray = jsonData[1]
    this.picArray = picData
  },
  methods: {
    openDialog(msg: any) {
      this.dialogMsg = {}
      this.dialogMsg = msg
      this.isShow = true
    },
    toSeeMachine(machine: any) {
      localStorage.machine = machine
      this.$router.push({ name: 'Machine', query: { name: machine } })
    }
  }
}
</script>
<style scoped>
.picture {
  height: 300px;
  margin-bottom: 10px;
}
.txtCss {
  color: #910326;
  margin-top: 30px;
}
.txtCss p {
  text-indent: 35px;
}
.txtCss h3 {
  text-align: center;
}
.iconCss {
  font-size: 32px;
  background-color: #910326;
  color: #fff;
}
.iconCss:hover {
  background-color: #ff7c00;
  color: #fff;
}
.carouselToSee {
  font-size: 32px;
  color: #910326;
  position: absolute;
  top: 43%;
  left: 46%;
}
.carouselToSee:hover {
  cursor: pointer;
  color: #ff7c00;
}
.picList {
  text-align: center;
}
.picList i {
  font-size: 32px;
  color: #910326;
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
.cardPd {
  padding: 10px;
  margin-top: 10px;
  background-image: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4);
}
.cardCss {
  margin-top: 12px;
}
.hr-double-arrow {
  color: #910326;
  border: double;
  border-width: 8px 5px;
  border-color: #910326 transparent;
  height: 5px;
  overflow: visible;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
}
.hr-double-arrow:before,
.hr-double-arrow:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-width: 0 3px 3px 0;
  border-style: double;
  top: -5px;
  background: radial-gradient(2px at 1px 1px, currentColor 2px, transparent 0) no-repeat;
}
.hr-double-arrow:before {
  transform: rotate(-45deg);
  left: -20px;
}
.hr-double-arrow:after {
  transform: rotate(135deg);
  right: -20px;
}
</style>
