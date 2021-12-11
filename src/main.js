import Vue from 'vue'
import App from './App.vue'
import Particles from 'particles.vue'


Vue.use(Particles)

new Vue({
  el: '#app',
  render: h => h(App)
})
