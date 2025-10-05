<template>
  <Navbar />

  <div v-if="error" class="error">
    <p>{{ error.message }}</p>
  </div>

  <div v-else-if="authorData" class="author-detail-container">
    <main class="author-detail-main">
      <h1>{{ authorData.name }} {{ authorData.surname }} Quotes</h1>

      <div id="main-image">
        <img
          :src="authorData.img"
          :alt="`${authorData.name} ${authorData.surname}`"
          :width="authorData.img_width"
          :height="authorData.img_height"
        />
      </div>

      <ul id="quotes">
        <li
          v-for="(quote, index) in authorData.en_quotes"
          :key="index"
          v-html="quote"
        ></li>
      </ul>

      <span style="display: block; text-align: center">
        {{ authorData.born }} - {{ authorData.dead }}
      </span>
    </main>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useRoute, useHead, onMounted } from '#imports'

import Navbar from '~/components/Navbar.vue'

const route = useRoute()
const slug = route.params.slug

// Masonry instance ref
const macyRef = ref(null)

// Fetch author data server-side
const { data: authorData, error } = await useAsyncData(`author-${slug}`, async () => {
  const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/quotes/authors-new.json')
  if (!res.ok) throw new Error('Failed to fetch authors')
  const allAuthors = await res.json()
  const author = allAuthors.find(a => `${a.id}-quotes`.toLowerCase() === slug.toLowerCase())
  if (!author) throw new Error('Author not found')
  return author
})

// Set SEO meta tags server-side
if (authorData.value) {
  useHead({
    title: `${authorData.value.name} ${authorData.value.surname} Quotes`,
    meta: [
      { name: 'description', content: authorData.value.en_meta_desc || '' },
      { property: 'og:title', content: `${authorData.value.name} ${authorData.value.surname} Quotes` },
      { property: 'og:description', content: authorData.value.en_meta_desc || '' },
      { property: 'og:url', content: `https://wordsfromlife.com/authors/${authorData.value.id}-quotes` },
      { property: 'og:image', content: authorData.value.img }
    ]
  })
}

// Add breadcrumb schema dynamically (client-side only)
onMounted(() => {
  if (authorData.value) {
    const existingSchema = document.querySelector('script[type="application/ld+json"]')
    if (existingSchema) existingSchema.remove()

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Authors",
          "item": "https://wordsfromlife.com/authors"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": `${authorData.value.name} ${authorData.value.surname} Quotes`
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(script)
  }
})
</script>

<style scoped>
.error {
  text-align: center;
  padding: 2rem;
  color: #e74c3c;
}

.author-detail-container {
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.author-detail-main {
  max-width: 600px;
  margin: 0 auto;
}

.author-detail-main h1 {
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#quotes {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

#quotes li {
  border: 1px solid #e5e5e5;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
  background: #f9f9f9;
  font-style: italic;
  line-height: 1.6;
  position: relative;
}

#quotes li::before {
  content: '"';
  font-size: 3rem;
  color: #ccc;
  position: absolute;
  top: -10px;
  left: 10px;
  font-family: serif;
}

#quotes li::after {
  content: '"';
  font-size: 3rem;
  color: #ccc;
  position: absolute;
  bottom: -20px;
  right: 10px;
  font-family: serif;
}

.author-detail-main span {
  display: block;
  text-align: center;
  margin-top: 2rem;
  color: #666;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .author-detail-container {
    max-width: 95%;
    padding: 1rem 0.5rem;
  }

  .author-detail-main h1 {
    font-size: 1.8rem;
  }

  #quotes li {
    padding: 1rem;
    margin: 0.5rem 0;
  }

  #quotes li::before,
  #quotes li::after {
    font-size: 2rem;
  }
}
</style>
