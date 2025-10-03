<template>
  <Navbar />

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
        <img
          :src="wordData.img"
          :alt="`${wordData.word}`"
          :width="wordData.img_width"
          :height="wordData.img_height"
        />
      </div>

      <p v-html="wordData.content"></p>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "../components/Navbar.vue";

export default {
  name: "preverbDetail",
  components: {},
  setup() {
    const route = useRoute();
    const wordData = ref(null);
    const loading = ref(true);
    const error = ref(null);

    // Get word slug from route params
    const wordSlug = computed(() => route.params.slug);

    // Fetch all words data
    const getwordsData = async () => {
      try {
        const res = await fetch(
          "https://words-from-life-5cb26-default-rtdb.firebaseio.com/idioms%20and%20proverbs/en/preverbs.json"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch proverb data");
        }
        return await res.json();
      } catch (err) {
        console.error("Error fetching proverbs:", err);
        throw err;
      }
    };

    // Filter word data based on slug
    const findwordBySlug = (data, slug) => {
      return data.find((item) => item.id.toLowerCase() === slug.toLowerCase());
    };

    // Set page meta data
    const setPageMeta = (word) => {
      if (word) {
        document.title = `${word.preverb}`;

        // Update meta description
        const metaDescription = document.querySelector(
          'meta[name="description"]'
        );
        if (metaDescription) {
          metaDescription.setAttribute("content", word.en_meta_desc || "");
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
          ogTitle.setAttribute("content", `${word.preverb}`);
        }

        const ogDescription = document.querySelector(
          'meta[property="og:description"]'
        );
        if (ogDescription) {
          ogDescription.setAttribute("content", word.en_meta_desc || "");
        }

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
          ogUrl.setAttribute(
            "content",
            `https://wordsfromlife.com/words/${word.id}`
          );
        }

        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
          ogImage.setAttribute("content", word.img);
        }
      }
    };

    // Add breadcrumb schema
    const addBreadcrumbSchema = (word) => {
      if (word) {
        const breadcrumbSchema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "words",
              item: "https://wordsfromlife.com/words",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: `Meaning of ${word.preverb}`,
            },
          ],
        };

        // Remove existing schema if any
        const existingSchema = document.querySelector(
          'script[type="application/ld+json"]'
        );
        if (existingSchema) {
          existingSchema.remove();
        }

        // Add new schema
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(breadcrumbSchema);
        document.head.appendChild(script);
      }
    };

    // Load word data on component mount
    onMounted(async () => {
      try {
        loading.value = true;
        const wordsData = await getwordsData();
        const word = findwordBySlug(wordsData, wordSlug.value);

        if (word) {
          wordData.value = word;
          setPageMeta(word);
          addBreadcrumbSchema(word);
        } else {
          error.value = "word not found";
        }
      } catch (err) {
        error.value = "Failed to load word data";
        console.error("Error loading word:", err);
      } finally {
        loading.value = false;
      }
    });

    return {
      wordData,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
.loading,
.error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}

.error {
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

.word-detail-main span {
  display: block;
  text-align: center;
  margin-top: 2rem;
  color: #666;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .word-detail-container {
    max-width: 95%;
    padding: 1rem 0.5rem;
  }

  .word-detail-main h1 {
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
