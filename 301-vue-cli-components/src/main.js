import { createApp } from "vue";
import App from "./App.vue";
import FriendsComponents from "./components/FriendsComponents.vue";
const app = createApp(App);
app.component("FriendsComponents", FriendsComponents);

app.mount("#app");
