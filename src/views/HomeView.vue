<script setup lang="ts"></script>

<template>
  <main>
    <div class="container-fluid">
      <!--  -->
      <div class="row">
        <div class="col-sm-6">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4000"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div
                  class="picture d-block w-100"
                  style="
                    background: url('/image/125681.bmp') no-repeat center center;
                    background-size: contain;
                  "
                ></div>
              </div>
              <div class="carousel-item">
                <div
                  class="picture d-block w-100"
                  style="
                    background: url('/image/666666.bmp') no-repeat center center;
                    background-size: contain;
                  "
                ></div>
              </div>
              <div class="carousel-item">
                <div
                  class="picture d-block w-100"
                  style="
                    background: url('/image/100040.bmp') no-repeat center center;
                    background-size: contain;
                  "
                ></div>
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
      <!--  -->
      <hr color="#6a2c70" size="5" />
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
              <div class="carousel-item active">
                <div
                  @click="toSeeMachine('teapot')"
                  class="picture machineHover d-block w-100"
                  style="
                    background: url('/image/153131.png') no-repeat center center;
                    background-size: contain;
                  "
                ></div>
              </div>
              <div class="carousel-item">
                <div
                  @click="toSeeMachine('dao')"
                  class="picture machineHover d-block w-100"
                  style="
                    background: url('/image/153313.png') no-repeat center center;
                    background-size: contain;
                  "
                ></div>
              </div>
              <div class="carousel-item">
                <div
                  @click="toSeeMachine('di')"
                  class="picture machineHover d-block w-100"
                  style="
                    background: url('/image/152534.png') no-repeat center center;
                    background-size: contain;
                  "
                ></div>
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
    </div>
  </main>
</template>
<script lang="ts">
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    toSeeMachine(machine: any) {
      document.documentElement.scrollTop = 0
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
.machineHover {
  cursor: pointer;
}
.txtCss {
  color: #6a2c70;
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
  background-color: #6a2c70;
  color: #fff;
}
</style>
