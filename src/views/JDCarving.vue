<template>
  <h2>精雕教程</h2>
  <div class="container-fluid">
    <div class="row">
      <div v-for="(item, index) in skillArray" :key="index" class="col-sm-4">
        <div class="card">
          <div class="card-body" style="color: #910326">
            <h5 class="card-title">
              <span @click="openSkill(item.docxUrl)">{{ item.name }}</span>
              <i
                class="bi bi-eye-fill toSee"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              ></i>
            </h5>
            <div class="row">
              <div class="col-sm-4 picture">
                <el-image style="height: 100%" :src="item.imageUrl" fit="contain" />
              </div>
              <div class="col-sm-8">{{ item.description }}</div>
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
  text-align: center;
}
</style>
