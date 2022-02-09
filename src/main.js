import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App).use(router).mount('#app')

console.log("[main.js]Base: " + process.env.BASE_URL + "public/config.json")

fetch(process.env.BASE_URL + "configGeral.json")
    .then((response) => response.json())
    .then((config) => {
        // Vue.prototype.$config = config
        
        const appBoro = createApp(App)
        console.log("[main.js]config: " + config.KEY)
        appBoro.config.globalProperties.$configGeral = config;
         //.use(router).mount('#app')
        appBoro.use(router)
        appBoro.mount("#app")
        
    })
    

//   fetch(process.env.BASE_URL + "config.json")
//   .then((response) => response.json())
//   .then((config) => {
//        Vue.prototype.$config = config
//        new Vue({
//          router,
//          store,
//          render: (h) => h(App)
//        }).$mount("#app")
//   })
