<template>
  <main class="main" role="main">
    <h1>Authors</h1>
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
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const authorsData = ref([])
const loading = ref(true)
let macyInstance = null
let MacyCtor = null

const getAuthors = async () => {
  const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/quotes/authors-new.json')
  if (!res.ok) throw new Error('Failed to fetch authors data')
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

onMounted(async () => {
  try {
    loading.value = true
    const authors = await getAuthors()
    authorsData.value = authors
    initMasonry()
  } finally {
    loading.value = false
  }
})
</script>
