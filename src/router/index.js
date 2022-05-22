import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/index.vue";
import AlemDeEstarView from "@/views/alem-de-estar/index.vue";
import AlemDoSomView from "@/views/alem-do-som/index.vue";
import AlemDoMarView from "@/views/alem-do-mar/index.vue";
import AlemDasMemoriasView from "@/views/alem-das-memorias/index.vue";
import OProjetoView from "@/views/o-projeto/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/alem-de-estar",
    name: "AlemDeEstar",
    component: AlemDeEstarView,
  },
  {
    path: "/alem-do-som",
    name: "AlemDoSom",
    component: AlemDoSomView,
  },
  {
    path: "/alem-do-mar",
    name: "AlemDoMar",
    component: AlemDoMarView,
  },
  {
    path: "/alem-das-memorias",
    name: "AlemDasMemorias",
    component: AlemDasMemoriasView,
  },
  {
    path: "/o-projeto",
    name: "OProjeto",
    component: OProjetoView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
