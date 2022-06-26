<template>
  <div class="container pt-5 pb-4">
    <div v-if="proximoSozinho()" class="col d-flex justify-content-end">
      <router-link
        @click.native="scrollToTop()"
        :to="rotaProximo()"
        class="nav-link text-dark p-0"
      >
        <h2 id="proximo" class="m-0">
          Próximo capítulo <i class="bi bi-arrow-right-square-fill"></i>
        </h2>
      </router-link>
    </div>
    <div v-if="ambos()" class="col d-flex justify-content-between">
      <router-link
        v-if="anterior()"
        @click.native="scrollToTop()"
        :to="rotaAnterior()"
        class="nav-link text-dark p-0"
      >
        <h2 id="anterior" class="m-0">
          <i class="bi bi-arrow-left-square-fill"></i> Capítulo anterior
        </h2>
      </router-link>
      <router-link
        v-if="proximo()"
        @click.native="scrollToTop()"
        :to="rotaProximo()"
        class="nav-link text-dark p-0"
      >
        <h2 id="proximo" class="m-0">
          Próximo capítulo <i class="bi bi-arrow-right-square-fill"></i>
        </h2>
      </router-link>
      <router-link
        v-if="equipe()"
        @click.native="scrollToTop()"
        :to="rotaProximo()"
        class="nav-link text-dark p-0"
      >
        <h2 id="equipe" class="m-0">
          Conheça a equipe <i class="bi bi-arrow-right-square-fill"></i>
        </h2>
      </router-link>
    </div>
    <div v-if="anteriorSozinho()" class="col d-flex justify-content-start">
      <router-link
        @click.native="scrollToTop()"
        :to="rotaAnterior()"
        class="nav-link text-dark p-0"
      >
        <h2 id="anterior" class="m-0">
          <i class="bi bi-arrow-left-square-fill"></i> Capítulo Anterior
        </h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Capitulos",
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
#proximo:hover, #equipe:hover {
  color: #1e3b1d;
  /* color: #698e1c; */
}
#anterior:hover {
  color: #b41917;
  /* color: #698e1c; */
}
@media (min-width: 768px) and (max-width: 991px) {
  h2 {
    font-size: 1.9rem;
  }
  .container {
    max-width: none;
  }
}
@media (min-width: 631px) and (max-width: 767px) {
  h2 {
    font-size: 1.7rem;
  }
  .container {
    max-width: none;
  }
}
@media (min-width: 500px) and (max-width: 630px) {
  h2 {
    font-size: 1.4rem;
  }
  .container {
    max-width: none;
  }
}
@media (min-width: 281px) and (max-width: 499px) {
  h2 {
    font-size: 1rem;
  }
  .container {
    max-width: none;
  }
}
@media (max-width: 280px) {
  h2 {
    font-size: 0.7rem;
  }
  .container {
    max-width: none;
  }
}
</style>
