<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent px-5">
    <div class="col-5">
      <router-link to="/">
        <img src="../../assets/images/logo.png" />
      </router-link>
    </div>
    <div class="col-7">
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
            <router-link
              to="/"
              v-bind:id="border()"
              class="nav-link text-white"
            >
              <b>HOME</b>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="/alem-de-estar" class="nav-link text-white">
              <b>ALÉM DE ESTAR</b>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="/alem-do-som" class="nav-link text-white">
              <b>ALÉM DO SOM</b>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="/alem-do-mar" class="nav-link text-white">
              <b>ALÉM DO MAR</b>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="alem-das-memorias" class="nav-link text-white">
              <b>ALÉM DAS MEMÓRIAS</b>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="/o-projeto" class="nav-link text-white">
              <b>O PROJETO</b>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    border: {
      type: Function,
    },
  },
};
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: 1001;
  width: 100%;
}
#border {
  border-bottom: 3px solid #2fa1e0;
}
.nav-link:hover {
  border-bottom: 3px solid #2fa1e0;
}
@media (max-width: 992px) {
  .navbar {
    top: 15px;
    padding: 0.5rem 0rem 0.5rem 0rem !important;
  }
  svg {
    fill: white;
  }
  .navbar-toggler {
    display: flex;
    align-self: end;
    border: none;
  }
  .navbar-nav {
    position: absolute;
    background: #282828;
    background: rgba(40, 40, 40, 0.9);
    width: 125%;
    top: 100%;
    right: 7%;
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
    margin: 0.5rem 0rem 0rem 0rem;
  }
  .collapse li {
    padding: 0.938rem;
  }
}
</style>
