import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/pharmaclaw-website/',
  title: "PharmaClaw",
  description: "制药智能化的终极武装 - 来自博普智库的制药行业智能中枢",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],
  appearance: 'dark',
  themeConfig: {
    siteTitle: '东富龙 PharmaClaw',
    nav: [
      { text: '首页', link: '/' }
    ],
    socialLinks: [],
    footer: {
      message: '东富龙制药智能中枢',
      copyright: '© 2026 东富龙 PharmaClaw. All rights reserved.'
    }
  }
})
