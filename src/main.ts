import Vue, { ComponentOptions } from 'vue'
import VueCustomElement from 'vue-custom-element'
import ExampleComponent from './example-component.vue'

Vue.config.productionTip = false

Vue.use(VueCustomElement)
Vue.customElement('example-component', <ComponentOptions<Vue>>ExampleComponent)

new Vue({
  render: h => h(ExampleComponent)
}).$mount('#app')
