import { createApp } from "vue";
import App from "./App.vue";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { toast } from "vue3-toastify";
import LottieAnimation from "lottie-web-vue";

const app = createApp(App);
app.use(LottieAnimation);
app.use(Vue3Toasity, {
  autoClose: 2000,
  position: toast.POSITION.BOTTOM_RIGHT,
});
app.mount("#app");
