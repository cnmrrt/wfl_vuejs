<template>
  <main class="main" role="main">
    <h1>Words From Life</h1>
    <div class="home-container">
      <!-- Authors Section -->
      <section class="section">
        <div id="macy-container">
          <div 
            v-for="item in authorsData" 
            :key="item.id"
            v-show="item.en_quotes !== '' && item.img != null"
            class="demo"
          >
            <a :href="`/authors/${item.id}-quotes`">
              <img
                :src="item.img"
                :alt="`${item.name} ${item.surname}`"
                :width="item.img_width"
                :height="item.img_height"
              />
              <span style="display: block; text-align: center; padding: .2rem 0">
                {{ item.name }} {{ item.surname }}
              </span>
            </a>
          </div>
        </div>
      </section>

      <!-- Words Section -->
      <section class="section">
        <h2 style="font-size: 40px; text-align: center; margin: 3rem 0 2rem 0">Words</h2>
        <div id="word-container">
          <div 
            v-for="item in wordsData" 
            :key="item.id"
            class="demo"
          >
            <a :href="`/words/${item.id}`">
              <span>{{ item.word }}</span>
              <p>{{ item.en_meta_desc }}</p>
            </a>
          </div>
        </div>
      </section>

      <!-- Proverbs Section -->
      <section class="section">
        <h2 style="font-size: 40px; text-align: center; margin: 3rem 0 2rem 0">Proverbs</h2>
        <div id="preverbs-container">
          <div 
            v-for="item in preverbsData" 
            :key="item.id"
            class="demo"
          >
            <a :href="`/preverbs/${item.id}`">
              <span>{{ item.preverb }}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import Macy from 'macy'

export default {
  name: 'Home',
  setup() {
    const authorsData = ref([])
    const wordsData = ref([])
    const preverbsData = ref([])
    const loading = ref(true)
    const error = ref(null)
    let macyInstance = null
    let wordsMacyInstance = null
    let proverbsMacyInstance = null

    // Data fetching functions
    const getAuthors = async () => {
      try {
        const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/quotes/authors-new.json')
        if (!res.ok) {
          throw new Error('Failed to fetch authors data')
        }
        return await res.json()
      } catch (err) {
        console.error('Error fetching authors:', err)
        throw err
      }
    }

    const getWords = async () => {
      try {
        const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/words.json')
        if (!res.ok) {
          throw new Error('Failed to fetch words data')
        }
        return await res.json()
      } catch (err) {
        console.error('Error fetching words:', err)
        throw err
      }
    }

    const getPreverbs = async () => {
      try {
        const res = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/idioms%20and%20proverbs/en/preverbs.json')
        if (!res.ok) {
          throw new Error('Failed to fetch preverbs data')
        }
        return await res.json()
      } catch (err) {
        console.error('Error fetching preverbs:', err)
        throw err
      }
    }

    // Initialize masonry layout for authors
    const initMasonry = () => {
      nextTick(() => {
        if (macyInstance) {
          macyInstance.destroy()
        }
        
        macyInstance = new Macy({
          container: '#macy-container',
          trueOrder: false,
          waitForImages: false,
          margin: 15,
          columns: 6,
          breakAt: {
            1200: 4,
            940: 3,
            520: 2
          }
        })
      })
    }

    // Initialize masonry layout for words
    const initWordsMasonry = () => {
      nextTick(() => {
        if (wordsMacyInstance) {
          wordsMacyInstance.destroy()
        }
        
        wordsMacyInstance = new Macy({
          container: '#word-container',
          trueOrder: false,
          waitForImages: false,
          margin: 15,
          columns: 4,
          breakAt: {
            1200: 3,
            940: 2,
            520: 1
          }
        })
      })
    }

    // Initialize masonry layout for proverbs
    const initProverbsMasonry = () => {
      nextTick(() => {
        if (proverbsMacyInstance) {
          proverbsMacyInstance.destroy()
        }
        
        proverbsMacyInstance = new Macy({
          container: '#preverbs-container',
          trueOrder: false,
          waitForImages: false,
          margin: 15,
          columns: 5,
          breakAt: {
            1200: 4,
            940: 3,
            520: 2
          }
        })
      })
    }

    // Load all data on component mount
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
        
        // Initialize all masonry layouts after data is loaded
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

    return {
      authorsData,
      wordsData,
      preverbsData,
      loading,
      error,
      initMasonry,
      initWordsMasonry,
      initProverbsMasonry
    }
  }
}
</script>

<style scoped>
.main {
  padding: 2rem 0;
}

.home-container {
  max-width: 100%;
  width: 1128px;
  padding: 0 24px;
  margin: 0 auto;
}

.section {
  padding: 0 0 50px 0;
}

.section:not(:last-child) {
  border-bottom: 1px solid #e5e5e5;
}

.demo {
  border: 2px solid #eee;
  margin: 10px;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.demo:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.demo a {
  color: black;
  text-decoration: none;
  display: block;
}

.demo img {
  display: block;
  height: auto;
  max-width: 100%;
  border-radius: 4px;
}

#macy-container {
  padding: 1rem 0;
}

#macy-container .demo {
  width: 100%;
  margin-bottom: 20px;
}

#word-container {
  padding: 1rem 0;
}

#word-container .demo {
  width: 100%;
  margin-bottom: 15px;
}

#preverbs-container {
  padding: 1rem 0;
}

#preverbs-container .demo {
  width: 100%;
  margin-bottom: 15px;
}

#word-container span {
  display: block;
  width: 100%;
  text-align: center;
  margin: 0.5rem 0;
  font-weight: bold;
  font-size: 20px;
}

#word-container p {
  padding: 0.5rem;
  margin: 0;
  text-align: center;
  color: #666;
}

#preverbs-container span {
  display: block;
  padding: 0.5rem;
  margin: 0;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 767px) {
  .home-container {
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>
