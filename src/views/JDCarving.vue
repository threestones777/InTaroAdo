<template>
  <h2>精雕教程</h2>
  <SkillList :skillArray="skillArray"></SkillList>
</template>

<script lang="ts">
import jdSkill from '@/json/jdSkill.json'
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
    this.skillArray = jdSkill
  }
}
</script>
<style scoped></style>
