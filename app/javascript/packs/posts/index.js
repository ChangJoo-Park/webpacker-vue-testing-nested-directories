import Vue from 'vue'
import App from './index.vue'

const initialize = () => {
  document.addEventListener('turbolinks:load', () => {
    const node = document.getElementById('hello-vue')
    console.log('node : ', node)
    if (node === null) {
      return
    }
    const props = JSON.parse(node.getAttribute('data'))
    console.log('props from rails ', props)
    const app = new Vue({
      render: h => h(App, { props })
    }).$mount('#hello-vue')
  })
}
export default {
  initialize
}
