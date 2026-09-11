<template>
  <div class="video-player">
    <YouTube :src="videoId" />
  </div>
</template>

<script setup>
import YouTube from 'vue3-youtube'

defineProps({
  videoId: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.video-player {
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 16px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
}

.video-player :deep(> div) {
  width: 100% !important;
  height: 100% !important;
}

.video-player :deep(iframe) {
  width: 100% !important;
  height: 100% !important;
}
</style>