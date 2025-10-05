<template>
  <div v-if="loading" class="loading">
    <p>Loading proverb details...</p>
  </div>
  <div v-else-if="error" class="error">
    <p>{{ error }}</p>
  </div>
  <div v-else-if="wordData" class="word-detail-container">
    <main class="word-detail-main">
      <h1>{{ wordData.preverb }}</h1>
      <div id="main-image">
        <img :src="wordData.img" :alt="`${wordData.word}`" :width="wordData.img_width" :height="wordData.img_height" />
      </div>
      <p v-html="wordData.content"></p>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const wordData = ref(null)
const loading = ref(true)
const error = ref(null)
const wordSlug = computed(() => route.params.slug)

const getwordsData = async () => {
  const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/idioms%20and%20proverbs/en/preverbs.json')
  if (!res.ok) throw new Error('Failed to fetch proverb data')
  return await res.json()
}

const findwordBySlug = (data, slug) => {
  return data.find(item => item.id.toLowerCase() === String(slug).toLowerCase())
}

onMounted(async () => {
  try {
    loading.value = true
    const wordsData = await getwordsData()
    const word = findwordBySlug(wordsData, wordSlug.value)
    if (word) {
      wordData.value = word
    } else {
      error.value = 'word not found'
    }
  } catch (err) {
    error.value = 'Failed to load word data'
    console.error('Error loading word:', err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.loading, .error { text-align: center; padding: 2rem; font-size: 1.2rem; }
.error { color: #e74c3c; }
.word-detail-container { max-width: 80%; margin: 0 auto; padding: 0; }
.word-detail-main { max-width: 600px; margin: 0 auto; }
.word-detail-main h1 { text-align: center; margin-bottom: 2rem; color: #333; }
#main-image { display: flex; justify-content: center; margin: 2rem 0; }
#main-image img { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
</style>
