import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全局组件注册
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h('div', { class: 'hero-particles' }, 
        Array.from({ length: 12 }, (_, i) => 
          h('div', { class: 'particle', key: i })
        )
      )
    })
  }
}
