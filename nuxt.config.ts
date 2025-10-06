export default defineNuxtConfig({

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    autoLastmod: true,

    // Custom URL generator
    urls: async () => {
      // Example: fetch words and authors from your API
      const words = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/words.json')
        .then(res => res.json())

      const authors = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/quotes/authors-new.json')
        .then(res => res.json())

      const proverbs = await fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/idioms%20and%20proverbs/en/preverbs.json')
        .then(res => res.json())
      return [
        { loc: '/', priority: 1.0 },
        { loc: '/', priority: 1.0 },
        { loc: '/authors', priority: 0.8 },
        { loc: '/words', priority: 0.8 },
        { loc: '/preverbs', priority: 0.8 },
        ...words.map((w: any) => ({ loc: `/words/${w.id}`, changefreq: 'weekly' })),
        ...authors.map((a: any) => ({ loc: `/authors/${a.id}`, changefreq: 'monthly' })),
        ...proverbs.map((p: any) => ({ loc: `/preverbs/${p.id}`, changefreq: 'monthly' }))
      ]
    }
  },

  css: [
    '~/assets/css/style.css'
  ],

  app: {
    head: {
      script: [
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5581015881313741",
          async: true,
          crossorigin: "anonymous"
        },
      ]
    }
  },

})
