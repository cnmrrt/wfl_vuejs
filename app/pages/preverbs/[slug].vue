<template>
  <Navbar />

  <div v-if="preverb" class="word-detail-container">
    <main class="word-detail-main">
      <h1>{{ preverb.preverb }}</h1>

      <div id="main-image" v-if="preverb.img">
        <img
          :src="preverb.img"
          :alt="preverb.preverb"
          :width="preverb.img_width"
          :height="preverb.img_height"
        />
      </div>

      <!-- renders immediately after SSR -->
      <p v-html="preverb.content"></p>
      
    </main>
  </div>

  <div v-else class="error">
    Word not found.
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import { useRoute, useHead } from '#imports'

const route = useRoute()
const slug = route.params.slug

// ✅ asyncData = loads before render (SSR + SSG)
const { data: preverb } = await useAsyncData(`preverb-${slug}`, async () => {
  const res = await $fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/idioms%20and%20proverbs/en/preverbs.json')
  return res.find(item => item.id?.toLowerCase() === slug.toLowerCase())
})

// ✅ SEO
useHead(() => {
  if (!preverb.value) return {}
  return {
    title: `${preverb.value.preverb}`,
    meta: [
    //   { name: 'description', content: word.value.en_meta_desc || '' },
    //   { property: 'og:title', content: `Meaning of ${word.value.word}` },
    //   { property: 'og:description', content: word.value.en_meta_desc || '' },
    //   { property: 'og:image', content: word.value.img || '' },
    //   { property: 'og:url', content: `https://wordsfromlife.com/words/${word.value.id}` }
    ],
    link: [
        {
          rel: 'canonical',
          href: `https://wordsfromlife.com/words/${preverb.value.id}`
        }
      ]
  }
})
</script>

<style scoped>
.error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #e74c3c;
}
.word-detail-container {
  max-width: 80%;
  margin: 0 auto;
  padding: 0;
}
.word-detail-main {
  max-width: 600px;
  margin: 0 auto;
}
.word-detail-main h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}
#main-image {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
#main-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.word-detail-main p {
  line-height: 1.6;
  margin: 1rem 0;
}
</style>
