import { h } from 'vue'
import Home from './components/Home.vue'

export default {
  enhanceApp({ app }) {
    app.component('Home', Home)
  },
  async render() {
    return h(Home)
  }
}
