<template>
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
