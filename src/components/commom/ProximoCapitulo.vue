<template>
  <div class="container pt-5 pb-3">
    <div v-if="proximoSozinho()" class="col d-flex justify-content-end">
      <router-link
        @click.native="scrollToTop()"
        :to="rotaProximo()"
        class="nav-link text-dark p-0"
      >
        <h2 class="m-0">
          Próximo capítulo <i class="bi bi-arrow-right-square-fill"></i>
        </h2>
        <hr />
      </router-link>
    </div>
    <div v-if="ambos()" class="col d-flex justify-content-between">
      <router-link
        v-if="anterior()"
        @click.native="scrollToTop()"
        :to="rotaAnterior()"
        class="nav-link text-dark p-0"
      >
        <h2 class="m-0">
          <i class="bi bi-arrow-left-square-fill"></i> Capítulo anterior
        </h2>
        <hr />
      </router-link>
      <router-link
        v-if="proximo()"
        @click.native="scrollToTop()"
        :to="rotaProximo()"
        class="nav-link text-dark p-0"
      >
        <h2 class="m-0">
          Próximo capítulo <i class="bi bi-arrow-right-square-fill"></i>
        </h2>
        <hr />
      </router-link>
      <router-link
        v-if="equipe()"
        @click.native="scrollToTop()"
        :to="rotaProximo()"
        class="nav-link text-dark p-0"
      >
        <h2 class="m-0">
          Conheça a equipe <i class="bi bi-arrow-right-square-fill"></i>
        </h2>
        <hr />
      </router-link>
    </div>
    <div v-if="anteriorSozinho()" class="col d-flex justify-content-start">
      <router-link
        @click.native="scrollToTop()"
        :to="rotaAnterior()"
        class="nav-link text-dark p-0"
      >
        <h2 class="m-0">
          <i class="bi bi-arrow-left-square-fill"></i> Capítulo Anterior
        </h2>
        <hr />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProximoCapitulo",
  methods: {
    rotaProximo() {
      if (this.$route.name === "NossaCasa") {
        return "/nossa-gente";
      }
      if (this.$route.name === "NossaGente") {
        return "/nossa-fe";
      }
      if (this.$route.name === "NossaFe") {
        return "/nossa-luta";
      }
      if (this.$route.name === "NossaLuta") {
        return "/o-projeto";
      }
    },
    rotaAnterior() {
      if (this.$route.name === "NossaGente") {
        return "/nossa-casa";
      }
      if (this.$route.name === "NossaFe") {
        return "/nossa-gente";
      }
      if (this.$route.name === "NossaLuta") {
        return "/nossa-fe";
      }
      if (this.$route.name === "OProjeto") {
        return "/nossa-luta";
      }
    },
    anterior() {
      if (this.$route.name !== "home" && this.$route.name !== "NossaCasa") {
        return true;
      } else return false;
    },
    anteriorSozinho() {
      if (this.$route.name === "OProjeto") {
        return true;
      }
    },
    proximo() {
      if (
        this.$route.name !== "home" &&
        this.$route.name !== "NossaLuta" &&
        this.$route.name !== "OProjeto"
      ) {
        return true;
      }
    },
    proximoSozinho() {
      if (this.$route.name === "NossaCasa") {
        return true;
      }
    },
    ambos() {
      if (
        this.$route.name !== "home" &&
        this.$route.name !== "NossaCasa" &&
        this.$route.name !== "OProjeto"
      ) {
        return true;
      }
    },
    equipe() {
      if (this.$route.name === "NossaLuta") {
        return true;
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  onCreate() {
    this.rota();
    this.esconder();
  },
};
</script>

<style scoped>
hr {
  border-color: #698e1c;
  border-width: 0.188rem;
  max-width: 3.125rem;
}
</style>
