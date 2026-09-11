<template>
  <div class="comment-section">
    <h3>Commenti</h3>

    <div class="comment-list">
      <p v-if="comments.length === 0" class="empty">
        Nessun commento ancora. Sii il primo a commentare!
      </p>

      <div v-for="comment in comments" :key="comment.id" class="comment">
        <div class="comment-avatar">{{ comment.author.charAt(0).toUpperCase() }}</div>
        <div class="comment-body">
          <span class="comment-author">{{ comment.author }}</span>
          <p class="comment-text">{{ comment.text }}</p>
        </div>
      </div>
    </div>

    <form class="comment-form" @submit.prevent="addComment">
      <input
        v-model="newComment"
        type="text"
        placeholder="Scrivi un commento..."
        class="comment-input"
      />
      <button type="submit" class="comment-submit" :disabled="!newComment.trim()">
        Invia
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  videoId: {
    type: [String, Number],
    required: true
  }
})

const comments = ref([])
const newComment = ref('')

function addComment() {
  if (!newComment.value.trim()) return

  comments.value.push({
    id: Date.now(),
    author: 'Tu',
    text: newComment.value.trim()
  })

  newComment.value = ''
}
</script>

<style scoped>
.comment-section {
  margin-top: 28px;
  border-top: 1px solid var(--color-border);
  padding-top: 20px;
}

h3 {
  font-size: 18px;
  margin-bottom: 14px;
}

.empty {
  color: var(--color-text-muted);
  font-size: 14px;
  margin-bottom: 14px;
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 18px;
}

.comment {
  display: flex;
  gap: 10px;
}

.comment-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-family: var(--font-heading);
  flex-shrink: 0;
}

.comment-body {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 8px 14px;
  flex: 1;
}

.comment-author {
  font-weight: 600;
  font-size: 13px;
  color: var(--color-text);
}

.comment-text {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-top: 2px;
}

.comment-form {
  display: flex;
  gap: 8px;
}

.comment-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  font-size: 14px;
  font-family: var(--font-body);
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.comment-submit {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  font-family: var(--font-body);
  cursor: pointer;
}

.comment-submit:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>