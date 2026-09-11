<template>
  <div class="video-page">
    <router-link to="/" class="back-link">← Torna alla lista</router-link>

    <p v-if="loading" class="status">Caricamento video...</p>
    <p v-else-if="error" class="status">Video non trovato.</p>

    <div v-else class="video-content">
      <h1>{{ video.title }}</h1>
      <p class="author">{{ video.author }}</p>

      <VideoPlayer :videoId="video.videoId" />

      <p class="description">{{ video.description }}</p>

      <CommentSection :videoId="video.id" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import VideoPlayer from '../components/VideoPlayer.vue'
import CommentSection from '../components/CommentSection.vue'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})

const video = ref(null)
const loading = ref(true)
const error = ref(false)

const API_URL = 'https://raw.githubusercontent.com/Anita-Liberatore/yoyo-friends-api/master/videos.json'

onMounted(async () => {
  try {
    const response = await axios.get(API_URL)
    const found = response.data.find(v => String(v.id) === String(props.id))
    if (!found) {
      error.value = true
    } else {
      video.value = found
    }
  } catch (err) {
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.video-page {
  max-width: 760px;
  margin: 0 auto;
  padding: 32px 24px;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--color-primary-dark);
  text-decoration: none;
  font-size: 14px;
}

.status {
  color: var(--color-text-muted);
}

h1 {
  font-size: 24px;
  margin-bottom: 4px;
}

.author {
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

.description {
  margin: 20px 0;
  color: var(--color-text);
  line-height: 1.6;
}
</style>