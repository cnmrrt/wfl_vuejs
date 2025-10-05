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
import { ref, nextTick } from 'vue'
import { useFetch } from '#imports'
import Navbar from '~/components/Navbar.vue'

const words = ref([])

// Fetch words data (SSR-friendly)
const { data: wordsData, pending, error } = await useFetch(
  'https://words-from-life-5cb26-default-rtdb.firebaseio.com/words.json'
)
words.value = wordsData.value || []


</script>