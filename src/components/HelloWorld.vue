<template>
  <div class="hello-world">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button @click="handleClick" class="btn">
      Click me! ({{ clickCount }})
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    title: {
      type: String,
      default: 'Hello World Component'
    },
    description: {
      type: String,
      default: 'This is a reusable Vue component'
    }
  },
  setup() {
    const clickCount = ref(0)
    
    const handleClick = () => {
      clickCount.value++
    }
    
    return {
      clickCount,
      handleClick
    }
  }
}
</script>

<style scoped>
.hello-world {
  padding: 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  text-align: center;
}

.hello-world h3 {
  margin: 0 0 1rem 0;
  color: #374151;
}

.hello-world p {
  margin: 0 0 1rem 0;
  color: #6b7280;
}

.btn {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.btn:hover {
  background: #059669;
}
</style>
