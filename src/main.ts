import { createApp } from "vue";
import App from "./App.vue";
/* router */
import router from "./router";

/* mock */
import "./mock";

/* pinia */
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

/* element-plus-icons */
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// message需要单独引入
import "element-plus/theme-chalk/src/message.scss";

// css
import "@/styles/index.scss";
import "virtual:windi.css";

const app = createApp(App);

app.use(router);
app.use(pinia);

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }

app.mount("#app");
