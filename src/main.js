import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export const bus = new Vue();

// Use component globally
// import Ninjas from './Ninjas.vue'
// Vue.component('ninjas', Ninjas);


new Vue({
  render: h => h( App)
}).$mount('#app')
