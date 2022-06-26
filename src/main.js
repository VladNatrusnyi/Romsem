import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config'
// import 'primevue/resources/themes/saga-blue/theme.css'
// import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import Carousel from 'primevue/carousel'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import InputMask from 'primevue/inputmask'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'

const app = createApp(App)

app.use(store).use(router).use(PrimeVue).mount('#app')
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Carousel', Carousel)
app.component('InputMask', InputMask)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Calendar', Calendar)
