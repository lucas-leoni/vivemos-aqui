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
              to="/nossa-casa"
              v-bind:id="nossaCasaBorder()"
              class="nav-link"
              >NOSSA CASA
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link
              @click.native="scrollToTop()"
              to="/nossa-gente"
              v-bind:id="nossaGenteBorder()"
              class="nav-link"
              >NOSSA GENTE</router-link
            >
          </li>
          <li class="nav-item px-3">
            <router-link
              @click.native="scrollToTop()"
              to="/nossa-fe"
              v-bind:id="nossaFeBorder()"
              class="nav-link"
              >NOSSA FÉ</router-link
            >
          </li>
          <li class="nav-item px-3">
            <router-link
              @click.native="scrollToTop()"
              to="/nossa-luta"
              v-bind:id="nossaLutaBorder()"
              class="nav-link"
              >NOSSA LUTA</router-link
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
    nossaCasaBorder() {
      if (this.$route.name === "NossaCasa") {
        return "border";
      }
    },
    nossaGenteBorder() {
      if (this.$route.name === "NossaGente") {
        return "border";
      }
    },
    nossaFeBorder() {
      if (this.$route.name === "NossaFe") {
        return "border";
      }
    },
    nossaLutaBorder() {
      if (this.$route.name === "NossaLuta") {
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
img {
  max-height: 3rem;
}
/* img {
  max-width: 100px;
} */
.nav-link {
  border-bottom: 3px solid white;
}
#border {
  border-bottom: 3px solid #b41917;
}
.nav-link:hover {
  border-bottom: 3px solid #b41917;
}
.navbar {
  padding: 0rem 3rem 0rem 3rem;
}
/* .navbar {
  padding-bottom: 0rem;
} */
@media (min-width: 993px) and (max-width: 1723px) {
  .col-5 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-7 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
}
/* @media (min-width: 1053px) and (max-width: 1240px) {
  nav {
    flex-direction: column;
  }
  .col-7 {
    max-width: none;
  }
  .col-5 {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
  #navbarNav {
    justify-content: center !important;
  }
} */
/* @media (min-width: 993px) and (max-width: 1052px) {
  nav {
    flex-direction: column;
    padding-left: 0rem !important;
    padding-right: 0rem !important;
  }
  .col-7 {
    max-width: none;
  }
  .col-5 {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
  #navbarNav {
    justify-content: center !important;
  }
} */
@media (max-width: 992px) {
  .nav-link {
    border: none;
  }
  /* .navbar {
    padding: 1rem 0rem 0.5rem 0rem !important;
  } */
  /* .navbar {
    padding: 0.5rem 0rem 0rem 0rem !important;
  } */
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
    /* width: 125%; */
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
@media (max-width: 992px) and (min-height: 281px) and (max-height: 414px) {
  .collapse li {
    padding: 0.3rem;
  }
}
@media (max-width: 992px) and (max-height: 280px) {
  .collapse li {
    padding: 0rem;
  }
  .nav-link {
    padding: 0.35rem 0rem;
  }
}
</style>
