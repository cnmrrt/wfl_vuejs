<template>
  <main class="main" role="main">
    <h1>Words</h1>
    <div class="home-container words-container">
      <section class="section">
        <ul>
          <li v-for="item in wordsData" :key="item.id">
            <NuxtLink :to="`/words/${item.id}`">{{ item.word }}</NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const wordsData = ref([])
const loading = ref(true)
let wordsMacyInstance = null
let MacyCtor = null

const getWords = async () => {
  const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/words.json')
  if (!res.ok) throw new Error('Failed to fetch words data')
  return await res.json()
}

const initWordsMasonry = () => {
  nextTick(async () => {
    if (!MacyCtor) {
      const { default: Macy } = await import('macy')
      MacyCtor = Macy
    }
    if (wordsMacyInstance) wordsMacyInstance.destroy()
    wordsMacyInstance = new MacyCtor({
      container: '#word-container',
      trueOrder: false,
      waitForImages: false,
      margin: 15,
      columns: 4,
      breakAt: { 1200: 3, 940: 2, 520: 1 }
    })
  })
}

onMounted(async () => {
  try {
    loading.value = true
    const words = await getWords()
    wordsData.value = words
    initWordsMasonry()
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.main { padding: 2rem 0; }
.home-container { max-width: 100%; width: 1128px; padding: 0 24px; margin: 0 auto; }
.section { padding: 0 0 50px 0; }
.demo { border: 2px solid #eee; margin: 10px; padding: 10px; border-radius: 8px; transition: transform 0.2s, box-shadow 0.2s; }
.demo:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
.demo a { color: black; text-decoration: none; display: block; }
#word-container { padding: 1rem 0; }
#word-container .demo { width: 100%; margin-bottom: 15px; }
#word-container span { display: block; width: 100%; text-align: center; margin: 0.5rem 0; font-weight: bold; font-size: 20px; }
#word-container p { padding: 0.5rem; margin: 0; text-align: center; color: #666; }
@media (max-width: 767px) { .home-container { max-width: 100%; padding: 0; } }
</style>
