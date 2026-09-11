<template>
  <div class="home-page">
    <section class="intro">
      <svg class="enso" viewBox="0 0 200 200" aria-hidden="true">
        <path
          d="M 100 20 A 80 80 0 1 1 35 155"
          fill="none"
          stroke="currentColor"
          stroke-width="10"
          stroke-linecap="round"
        />
      </svg>
      <h1>Pratica insieme<br />alla community</h1>
      <p>Video di yoga condivisi da istruttori e appassionati, <em>per ogni corpo e ogni esigenza.</em></p>
    </section>

    <p v-if="loading" class="status">Caricamento video in corso...</p>
    <p v-else-if="error" class="status">Si è verificato un errore nel caricamento dei video.</p>

    <div v-else class="video-grid">
      <VideoCard
        v-for="video in videos"
        :key="video.id"
        :video="video"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import VideoCard from '../components/VideoCard.vue'

const videos = ref([])
const loading = ref(true)
const error = ref(false)

const API_URL = 'https://raw.githubusercontent.com/Anita-Liberatore/yoyo-friends-api/master/videos.json'

onMounted(async () => {
  try {
    const response = await axios.get(API_URL)
    videos.value = response.data
  } catch (err) {
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.home-page {
  max-width: 1080px;
  margin: 0 auto;
  padding: 48px 24px 32px;
}

.intro {
  position: relative;
  margin-bottom: 56px;
  max-width: 480px;
}

.enso {
  position: absolute;
  top: -30px;
  left: -60px;
  width: 220px;
  height: 220px;
  color: var(--color-primary);
  opacity: 0.18;
  transform: rotate(-15deg);
  z-index: -1;
}

.intro h1 {
  font-size: 40px;
  line-height: 1.15;
  margin-bottom: 16px;
  color: var(--color-primary-dark);
}

.intro p {
  font-size: 16px;
  color: var(--color-text-muted);
}

.intro em {
  font-style: italic;
  color: var(--color-primary-dark);
}

.status {
  color: var(--color-text-muted);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 28px;
}
</style>