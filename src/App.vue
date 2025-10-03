<template>
  <div id="app">
    <header class="header">
      <h1>Welcome to WFL Vue.js App</h1>
      <p>Built with Vue 3 + Vite</p>
    </header>
    
    <main class="main">
      <div class="card">
        <h2>Counter Example</h2>
        <p>Count: {{ count }}</p>
        <div class="buttons">
          <button @click="increment" class="btn btn-primary">+</button>
          <button @click="decrement" class="btn btn-secondary">-</button>
          <button @click="reset" class="btn btn-danger">Reset</button>
        </div>
      </div>
      
      <div class="card">
        <h2>Message Example</h2>
        <input 
          v-model="message" 
          placeholder="Type a message..."
          class="input"
        />
        <p class="message-display">{{ message || 'No message yet' }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const count = ref(0)
    const message = ref('')
    
    const increment = () => {
      count.value++
    }
    
    const decrement = () => {
      count.value--
    }
    
    const reset = () => {
      count.value = 0
    }
    
    return {
      count,
      message,
      increment,
      decrement,
      reset
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-bottom: 2rem;
}

.header h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2.5rem;
}

.header p {
  margin: 0;
  opacity: 0.9;
}

.main {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.card h2 {
  margin: 0 0 1rem 0;
  color: #374151;
}

.buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background: #4b5563;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
}

.input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border-color 0.2s;
}

.input:focus {
  outline: none;
  border-color: #3b82f6;
}

.message-display {
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 6px;
  color: #374151;
  font-style: italic;
}
</style>
