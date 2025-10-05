<template>
  <main class="main" role="main">
    <h1>Words From Life</h1>
    <div class="home-container">
      <section class="section">
        <div id="macy-container">
          <div 
            v-for="item in authorsData" 
            :key="item.id"
            v-show="item.en_quotes !== '' && item.img != null"
            class="demo"
          >
            <NuxtLink :to="`/authors/${item.id}-quotes`">
              <img
                :src="item.img"
                :alt="`${item.name} ${item.surname}`"
                :width="item.img_width"
                :height="item.img_height"
              />
              <span style="display: block; text-align: center; padding: .2rem 0">
                {{ item.name }} {{ item.surname }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 style="font-size: 40px; text-align: center; margin: 3rem 0 2rem 0">Words</h2>
        <div id="word-container">
          <div 
            v-for="item in wordsData" 
            :key="item.id"
            class="demo"
          >
            <NuxtLink :to="`/words/${item.id}`">
              <span>{{ item.word }}</span>
              <p>{{ item.en_meta_desc }}</p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 style="font-size: 40px; text-align: center; margin: 3rem 0 2rem 0">Proverbs</h2>
        <div id="preverbs-container">
          <div 
            v-for="item in preverbsData" 
            :key="item.id"
            class="demo"
          >
            <NuxtLink :to="`/preverbs/${item.id}`">
              <span>{{ item.preverb }}</span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const authorsData = ref([])
const wordsData = ref([])
const preverbsData = ref([])
const loading = ref(true)
const error = ref(null)
let macyInstance = null
let wordsMacyInstance = null
let proverbsMacyInstance = null
let MacyCtor = null

const getAuthors = async () => {
  const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/quotes/authors-new.json')
  if (!res.ok) throw new Error('Failed to fetch authors data')
  return await res.json()
}

const getWords = async () => {
  const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/words.json')
  if (!res.ok) throw new Error('Failed to fetch words data')
  return await res.json()
}

const getPreverbs = async () => {
  const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/idioms%20and%20proverbs/en/preverbs.json')
  if (!res.ok) throw new Error('Failed to fetch preverbs data')
  return await res.json()
}

const initMasonry = () => {
  nextTick(async () => {
    if (!MacyCtor) {
      const { default: Macy } = await import('macy')
      MacyCtor = Macy
    }
    if (macyInstance) macyInstance.destroy()
    macyInstance = new MacyCtor({
      container: '#macy-container',
      trueOrder: false,
      waitForImages: false,
      margin: 15,
      columns: 6,
      breakAt: { 1200: 4, 940: 3, 520: 2 }
    })
  })
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

const initProverbsMasonry = () => {
  nextTick(async () => {
    if (!MacyCtor) {
      const { default: Macy } = await import('macy')
      MacyCtor = Macy
    }
    if (proverbsMacyInstance) proverbsMacyInstance.destroy()
    proverbsMacyInstance = new MacyCtor({
      container: '#preverbs-container',
      trueOrder: false,
      waitForImages: false,
      margin: 15,
      columns: 5,
      breakAt: { 1200: 4, 940: 3, 520: 2 }
    })
  })
}

onMounted(async () => {
  try {
    loading.value = true
    const [authors, words, preverbs] = await Promise.all([
      getAuthors(),
      getWords(),
      getPreverbs()
    ])
    authorsData.value = authors
    wordsData.value = words
    preverbsData.value = preverbs

    initMasonry()
    initWordsMasonry()
    initProverbsMasonry()
  } catch (err) {
    error.value = err.message
    console.error('Error loading data:', err)
  } finally {
    loading.value = false
  }
})
</script>
