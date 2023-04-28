import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"
import VueHtml2Canvas from 'vue-html2canvas';

const app = createApp(App)

app.use(VueHtml2Canvas).mount('#app')
