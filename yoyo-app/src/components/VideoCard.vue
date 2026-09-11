<template>
  <router-link :to="`/video/${video.id}`" class="video-card">
    <div class="thumbnail-wrap">
      <img :src="video.thumbnail" :alt="video.title" class="thumbnail" />
      <span class="duration-badge">{{ video.duration }}</span>
    </div>
    <div class="info">
      <div class="divider"></div>
      <h3>{{ video.title }}</h3>
      <p class="author">— {{ video.author }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  video: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.video-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.thumbnail-wrap {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
}

.thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.video-card:hover .thumbnail {
  transform: scale(1.02);
}

.duration-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(255, 253, 248, 0.9);
  color: var(--color-text);
  font-size: 11px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 3px;
  font-family: var(--font-body);
}

.divider {
  width: 28px;
  height: 2px;
  background: var(--color-primary);
  margin-bottom: 8px;
}

.info h3 {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 17px;
  line-height: 1.3;
  margin-bottom: 4px;
  color: var(--color-text);
}

.author {
  font-size: 13px;
  font-weight: 300;
  font-style: italic;
  color: var(--color-text-muted);
}
</style>