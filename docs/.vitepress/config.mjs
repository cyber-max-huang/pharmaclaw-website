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
    siteTitle: 'PharmaClaw',
    logo: '/resource/2-logo.png',
    logoText: 'PharmaClaw',
    nav: [
      { text: '首页', link: '/' }
    ],
    socialLinks: [],
    footer: {
      message: '来自博普智库',
      copyright: '© 2026 PharmaClaw. All rights reserved.'
    }
  }
})
