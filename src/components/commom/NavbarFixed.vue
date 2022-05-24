<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white px-5">
    <div class="col-5">
      <router-link to="/">
        <img src="../../assets/images/logo.png" />
      </router-link>
    </div>
    <div class="col-7 pr-4">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item px-3">
            <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item px-3">
            <router-link
              @click.native="scrollToTop()"
              to="/alem-de-estar"
              v-bind:id="alemDeEstarBorder()"
              class="nav-link"
              >ALÉM DE ESTAR
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link
              @click.native="scrollToTop()"
              to="/alem-do-som"
              v-bind:id="alemDoSomBorder()"
              class="nav-link"
              >ALÉM DO SOM</router-link
            >
          </li>
          <li class="nav-item px-3">
            <router-link
              @click.native="scrollToTop()"
              to="/alem-do-mar"
              v-bind:id="alemDoMarBorder()"
              class="nav-link"
              >ALÉM DO MAR</router-link
            >
          </li>
          <li class="nav-item px-3">
            <router-link
              @click.native="scrollToTop()"
              to="alem-das-memorias"
              v-bind:id="alemDasMemoriasBorder()"
              class="nav-link"
              >ALÉM DAS MEMÓRIAS</router-link
            >
          </li>
          <li class="nav-item px-3">
            <router-link
              @click.native="scrollToTop()"
              to="/o-projeto"
              v-bind:id="oProjetoBorder()"
              class="nav-link"
              >O PROJETO</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarFixed",
  methods: {
    alemDeEstarBorder() {
      if (this.$route.name === "AlemDeEstar") {
        return "border";
      }
    },
    alemDoSomBorder() {
      if (this.$route.name === "AlemDoSom") {
        return "border";
      }
    },
    alemDoMarBorder() {
      if (this.$route.name === "AlemDoMar") {
        return "border";
      }
    },
    alemDasMemoriasBorder() {
      if (this.$route.name === "AlemDasMemorias") {
        return "border";
      }
    },
    oProjetoBorder() {
      if (this.$route.name === "OProjeto") {
        return "border";
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.nav-link {
  border-bottom: 3px solid white;
}
#border {
  border-bottom: 3px solid #2fa1e0;
}
.nav-link:hover {
  border-bottom: 3px solid #2fa1e0;
}
.navbar {
  padding-bottom: 0rem;
}
@media (max-width: 992px) {
  .nav-link {
    border: none;
  }
  .navbar {
    padding: 1rem 0rem 0.5rem 0rem !important;
  }
  svg {
    fill: black;
  }
  .navbar-toggler {
    display: flex;
    align-self: end;
    padding: 0rem 0rem;
    font-size: 1.25rem;
    border: none;
  }
  .navbar-nav {
    position: absolute;
    background: #282828;
    background: rgba(40, 40, 40, 0.9);
    width: 125%;
    top: 100%;
    right: 8%;
    margin: 0px;
    height: auto;
  }
  .col-7 {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
  .collapse {
    justify-content: center;
  }
  .collapse ul {
    background: rgba(40, 40, 40, 0.9);
    z-index: 1001;
    margin: 0.5rem 0rem 0rem 0rem;
  }
  .collapse li {
    padding: 0.938rem;
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
  }
}
</style>
