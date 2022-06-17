import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/home/index.vue";
import NossaCasaView from "@/views/nossa-casa/index.vue";
import NossaGenteView from "@/views/nossa-gente/index.vue";
import NossaFeView from "@/views/nossa-fe/index.vue";
import NossaLutaView from "@/views/nossa-luta/index.vue";
import OProjetoView from "@/views/o-projeto/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/nossa-casa",
    name: "NossaCasa",
    component: NossaCasaView,
  },
  {
    path: "/nossa-gente",
    name: "NossaGente",
    component: NossaGenteView,
  },
  {
    path: "/nossa-fe",
    name: "NossaFe",
    component: NossaFeView,
  },
  {
    path: "/nossa-luta",
    name: "NossaLuta",
    component: NossaLutaView,
  },
  {
    path: "/o-projeto",
    name: "OProjeto",
    component: OProjetoView,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
