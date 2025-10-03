<template>
  <main class="main" role="main">
    <h1>Preverbs</h1>
    <div class="home-container">
      <section class="section">
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
import { ref, onMounted } from 'vue'

export default {
  name: 'Preverbs',
  setup() {
    const preverbsData = ref([])
    const loading = ref(true)

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

    onMounted(async () => {
      try {
        loading.value = true
        const preverbs = await getPreverbs()
        preverbsData.value = preverbs
      } catch (err) {
        console.error('Error loading preverbs:', err)
      } finally {
        loading.value = false
      }
    })

    return {
      preverbsData,
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

#preverbs-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
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
    max-width: 90%;
    padding: 0 1rem;
  }
  
  #preverbs-container {
    grid-template-columns: 1fr;
  }
}
</style>
