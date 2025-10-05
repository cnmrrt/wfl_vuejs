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
    defaults: {
      changefreq: 'daily',
      priority: 0.7
    },
    urls: [
      { loc: '/', priority: 1.0 },
      { loc: '/authors', priority: 0.8 },
      { loc: '/words', priority: 0.8 },
      { loc: '/preverbs', priority: 0.8 }
    ]
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
