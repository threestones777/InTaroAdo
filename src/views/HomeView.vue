<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

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
                    background: url('src/assets/125681.bmp') no-repeat center center;
                    background-size: contain;
                  "
                ></div>
              </div>
              <div class="carousel-item">
                <div
                  class="picture d-block w-100"
                  style="
                    background: url('src/assets/666666.bmp') no-repeat center center;
                    background-size: contain;
                  "
                ></div>
              </div>
              <div class="carousel-item">
                <div
                  class="picture d-block w-100"
                  style="
                    background: url('src/assets/100040.bmp') no-repeat center center;
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
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-sm-6">xxxxxxxxxxxx</div>
      </div>
      <!--  -->
      <div class="row">
        <div class="col-sm-6">7777777777</div>
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
                    background: url('src/assets/153131.png') no-repeat center center;
                    background-size: contain;
                  "
                ></div>
              </div>
              <div class="carousel-item">
                <div
                  @click="toSeeMachine('dao')"
                  class="picture machineHover d-block w-100"
                  style="
                    background: url('src/assets/153313.png') no-repeat center center;
                    background-size: contain;
                  "
                ></div>
              </div>
              <div class="carousel-item">
                <div
                  @click="toSeeMachine('di')"
                  class="picture machineHover d-block w-100"
                  style="
                    background: url('src/assets/152534.png') no-repeat center center;
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
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselInterval"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
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
    return {
      iframeSrc: '/html/teapot.html' // 确保路径正确，且文件可访问
    }
  },
  created() {
    // console.log(99999999)
  },
  methods: {
    toSeeMachine(machine: any) {
      console.log(machine)
      localStorage.machine = machine
      this.$router.push({ name: 'Machine' })
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
</style>
