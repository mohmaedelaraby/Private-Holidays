import { createApp } from 'vue'
import App from './App.vue'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
//import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap"

// Setup plugin for defaults or `$screens` (optional)


createApp(App)
// Use the plugin with optional defaults
.use(VCalendar, {})
// Mount the app
.mount('#app');
