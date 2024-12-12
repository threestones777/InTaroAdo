<template>
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
              <span class="nameClick" @click="toSeeMachine(item.click)">{{ item.name }}</span>
            </h5>
            <div class="row">
              <div
                class="col-sm-12 picture"
                :style="{
                  background: `url(${item.imageUrl}) no-repeat center center`
                }"
                style="background-size: contain"
              ></div>
            </div>
            <div class="seeDetail" @click="toSeeMachine(item.click)">
              查看详情<i class="bi bi-eye-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import cadModel from '@/json/cadModel.json'
import { Base64 } from 'js-base64'
export default {
  data() {
    return {
      skillArray: [] as any
    }
  },
  methods: {
    toSeeMachine(machine: any) {
      localStorage.machine = machine
      this.$router.push({ name: 'Machine', query: { name: machine } })
    }
  },
  mounted() {
    this.skillArray = []
    this.skillArray = cadModel
  }
}
</script>
<style scoped>
.picture {
  height: 100px;
  text-align: center;
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
