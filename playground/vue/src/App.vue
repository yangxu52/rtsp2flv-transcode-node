<script setup>
import FLVPlayer from './components/FLVPlayer.vue'
</script>

<template>
  <FLVPlayer class="player" url="rtsp://admin:123456@89.0.142.86:554/cam/"/>
</template>

<style scoped>
.player {
  width: 100%;
  height: 100%;
}
</style>
