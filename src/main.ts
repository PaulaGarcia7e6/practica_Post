import './assets/main.css'

import { createApp } from 'vue'
import myJournalVue from './views/myJournal.vue'
import router from './router'

const app = createApp(myJournalVue)

app.use(router)

app.mount('#app')
