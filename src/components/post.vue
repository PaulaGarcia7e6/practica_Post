<template>
  <div class="d-flex">
    <img :src="imgName" alt="">
    <div>
      <p>{{ journalText }}</p>
      <p>{{ date }} | danielkelly_io</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  imgName: string,
  journalText: string,
  date: string
}>()
</script>
<style scoped>

</style>