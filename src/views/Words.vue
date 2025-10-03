<template>
  <main class="main" role="main">
    <h1>Words</h1>
    <div class="home-container">
      <section class="section">
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
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Words',
  setup() {
    const wordsData = ref([])
    const loading = ref(true)

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

    onMounted(async () => {
      try {
        loading.value = true
        const words = await getWords()
        wordsData.value = words
      } catch (err) {
        console.error('Error loading words:', err)
      } finally {
        loading.value = false
      }
    })

    return {
      wordsData,
      loading
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

.demo {
  border: 2px solid #eee;
  margin: 10px;
  padding: 10px;
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

#word-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
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

@media (max-width: 767px) {
  .home-container {
    max-width: 90%;
    padding: 0 1rem;
  }
  
  #word-container {
    grid-template-columns: 1fr;
  }
}
</style>
