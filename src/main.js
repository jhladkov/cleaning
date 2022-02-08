import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '/src/UI/index'
import directives from '@/directives/index'

const app = createApp(App)


components.forEach(component => {
    app.component(component.name,component)
})

directives.forEach(directive => {
    console.log(directive)
    app.directive(directive.name, directive)  // register directives
})


app.use(store).use(router).mount('#app')
