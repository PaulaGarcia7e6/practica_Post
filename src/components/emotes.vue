<template>
    <img src="../assets/emojis/Smiley.svg" alt="Smiley"  @click="emitCustomEvent('Smiley')">
    <img src="../assets/emojis/Angry.svg" alt="Angry"  @click="emitCustomEvent('Angry')">
    <img src="../assets/emojis/Sad.svg" alt="Sad"  @click="emitCustomEvent('Sad')">
    <img src="../assets/emojis/Blank.svg" alt="Blank"  @click="emitCustomEvent('Blank')">
    <img src="../assets/emojis/XEyes.svg" alt="XEyes"  @click="emitCustomEvent('XEyes')">
</template>
<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['emitCustomEvent']);
function emitCustomEvent(nom:string) {
  emit('emitCustomEvent',`/src/assets/emojis/${nom}.svg`)
  //console.log(searchTerm.value)
}
</script>
<style scoped>
img {
  height: 4rem;
}
</style>