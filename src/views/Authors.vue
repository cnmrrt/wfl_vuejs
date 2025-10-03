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
    </div>
  </main>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import Macy from 'macy'

export default {
  name: 'Authors',
  setup() {
    const authorsData = ref([])
    const loading = ref(true)
    let macyInstance = null

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

    // Initialize masonry layout
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

    onMounted(async () => {
      try {
        loading.value = true
        const authors = await getAuthors()
        authorsData.value = authors
        
        // Initialize masonry after data is loaded
        initMasonry()
      } catch (err) {
        console.error('Error loading authors:', err)
      } finally {
        loading.value = false
      }
    })

    return {
      authorsData,
      loading,
      initMasonry
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

@media (max-width: 767px) {
  .home-container {
    max-width: 100;
    padding: 0;
  }
}
</style>
