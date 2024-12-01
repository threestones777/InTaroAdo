<template>
  <h2>CAD教程</h2>
  <SkillList :skillArray="skillArray"></SkillList>
</template>

<script lang="ts">
import cadSkill from '@/json/cadSkill.json'
import SkillList from '../components/SkillList.vue'
export default {
  components: {
    SkillList
  },
  data() {
    return {
      skillArray: [] as any
    }
  },
  methods: {},
  mounted() {
    this.skillArray = []
    this.skillArray = cadSkill
  }
}
</script>
<style scoped></style>
