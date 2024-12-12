<template>
  <SkillList :skillArray="skillArray"></SkillList>
</template>

<script lang="ts">
import webSkill from '@/json/webSkill.json'
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
    this.skillArray = webSkill
  }
}
</script>
<style scoped></style>
