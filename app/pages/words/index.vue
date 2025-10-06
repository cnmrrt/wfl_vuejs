<template>
    <Navbar />
  <main class="main" role="main">
    <h1>Words</h1>
    <div class="home-container words-container">
      <section class="section" id="word-container">
        <ul>
          <li v-for="item in words" :key="item.id">
            <NuxtLink :to="`/words/${item.id}`">{{ item.word }}</NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useFetch } from '#imports'
import Navbar from '~/components/Navbar.vue'

const words = ref([])

// Fetch words data (SSR-friendly)
const { data: wordsData, pending, error } = await useFetch(
  'https://words-from-life-5cb26-default-rtdb.firebaseio.com/words.json'
)

if (wordsData.value) {
  // Convert object to array (if Firebase returns an object)
  const arr = Array.isArray(wordsData.value)
    ? wordsData.value
    : Object.entries(wordsData.value).map(([id, item]) => ({
        id,
        ...item
      }))

  // Sort alphabetically by 'word'
  words.value = arr.sort((a, b) => a.word.localeCompare(b.word, 'en', { sensitivity: 'base' }))
}
</script>
