import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "PharmaClaw",
  description: "制药智能化的终极武装 - 来自博普智库的制药行业智能中枢",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  appearance: 'dark',
  themeConfig: {
    siteTitle: 'PharmaClaw',
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' }
    ],
    socialLinks: [],
    footer: {
      message: '来自博普智库',
      copyright: '© 2026 PharmaClaw. All rights reserved.'
    }
  }
})
