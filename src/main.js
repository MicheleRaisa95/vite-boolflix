import { createApp } from 'vue'

// import style
import './assets/scss/main.scss'

// import vue root component
import App from './App.vue'

// importo libreria icone 
import { FontAwesomeIcon } from './font-awesome';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');


