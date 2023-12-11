import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "./src/components/IndexPage.vue";
import AdminPage from "./src/components/AdminPage.vue";
import ShoppingCart from "./src/components/ShoppingCart.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: IndexPage,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
