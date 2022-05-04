import { createRouter, createWebHistory } from "vue-router";
import nav from "@/views/navPage";
import about from "@/views/aboutPage";

const routes = [
  {
    path: "/",
    name: "nav",
    component: nav,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
