import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIcons from "@element-plus/icons-vue";
import httphelper from "@/assets/js/http.js";

const app = createApp(App);
app.config.globalProperties.$http = httphelper;
for (const icon in ElIcons) {
  app.component(icon, ElIcons[icon]);
}
app.use(ElementPlus);
app.use(router);
app.mount("#app");
