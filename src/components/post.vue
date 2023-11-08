<template>
<p>
    <p>{{ journalText }}</p>
    <p>{{ date }} | danielkelly_io</p>
</p>
</template>
<script lang="ts" setup>
defineProps<{
  journalText: string,
  date: Date
}>()
</script>
<style scoped>

</style>