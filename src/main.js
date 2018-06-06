import Vue from 'vue'
import App from './App.vue'

// Use component globally
// import Ninjas from './Ninjas.vue'
// Vue.component('ninjas', Ninjas);


new Vue({
  render: h => h( App)
}).$mount('#app')
