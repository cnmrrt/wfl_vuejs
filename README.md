# WFL Vue.js Project

A modern Vue.js 3 application built with Vite for fast development and optimized builds.

## Features

- ⚡️ Vue 3 with Composition API
- 🚀 Vite for lightning-fast development
- 🎨 Modern, responsive UI
- 📦 Component-based architecture
- 🔥 Hot Module Replacement (HMR)

## Project Structure

```
wfl_vuejs/
├── src/
│   ├── components/          # Reusable Vue components
│   │   └── HelloWorld.vue
│   ├── App.vue             # Main application component
│   ├── main.js             # Application entry point
│   └── style.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## What's Included

The project includes:

- **Counter Component**: Demonstrates reactive state management
- **Message Input**: Shows two-way data binding
- **HelloWorld Component**: Example of a reusable component
- **Modern Styling**: Clean, responsive design with CSS Grid and Flexbox

## Development

The app uses Vue 3's Composition API for better code organization and reusability. Key features demonstrated:

- `ref()` for reactive state
- Event handling with `@click`
- Two-way binding with `v-model`
- Component props and communication

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Learn More

- [Vue.js Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
