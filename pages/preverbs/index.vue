<template>
  <main class="main" role="main">
    <h1>Proverbs</h1>
    <div class="home-container">
      <section class="section">
        <div id="preverbs-container">
          <div v-for="item in preverbsData" :key="item.id" class="demo">
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

const preverbsData = ref([])
const loading = ref(true)
let proverbsMacyInstance = null
let MacyCtor = null

const getPreverbs = async () => {
  const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/idioms%20and%20proverbs/en/preverbs.json')
  if (!res.ok) throw new Error('Failed to fetch preverbs data')
  return await res.json()
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
    const preverbs = await getPreverbs()
    preverbsData.value = preverbs
    initProverbsMasonry()
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
#preverbs-container { padding: 1rem 0; }
#preverbs-container .demo { width: 100%; margin-bottom: 15px; }
#preverbs-container span { display: block; padding: 0.5rem; margin: 0; font-weight: 600; text-align: center; }
@media (max-width: 767px) { .home-container { max-width: 90%; padding: 0 1rem; } }
</style>
