<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent px-5">
    <div class="col-5 d-flex justify-content-center">
      <router-link to="/">
        <img src="../../assets/images/logo-home.png" />
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
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
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
            <router-link to="/nossa-casa" class="nav-link text-white">
              <b>NOSSA CASA</b>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="/nossa-gente" class="nav-link text-white">
              <b>NOSSA GENTE</b>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="/nossa-fe" class="nav-link text-white">
              <b>NOSSA FÉ</b>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="nossa-luta" class="nav-link text-white">
              <b>NOSSA LUTA</b>
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
img {
  max-width: 100px;
}
.navbar {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1001;
  width: 100%;
}
#border {
  border-bottom: 3px solid #b41917;
}
.nav-link:hover {
  border-bottom: 3px solid #b41917;
}
nav {
  flex-direction: column;
}
.col-7 {
  max-width: none;
}
.col-5 {
  padding-bottom: 0rem;
}
@media (min-width: 1064px) and (max-width: 1257px) {
  nav {
    flex-direction: column;
  }
  .col-7 {
    max-width: none;
  }
  .col-5 {
    display: flex;
    justify-content: center;
  }
  #navbarNav {
    justify-content: center !important;
  }
}
@media (min-width: 993px) and (max-width: 1063px) {
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
  }
}
@media (max-width: 992px) {
  .navbar {
    top: 0px;
    padding: 0.5rem 0rem 0.5rem 0rem !important;
    flex-direction: row;
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
    top: 100%;
    right: 7%;
    margin: 0px;
    height: auto;
  }
  .col-7 {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding-right: 2rem;
  }
  .col-5 {
    justify-content: start !important;
    padding-left: 1.5rem;
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
@media (max-width: 992px) and (min-height: 281px) and (max-height: 414px) {
  .navbar {
    top: 0px;
    padding-top: 0rem !important;
  }
  .collapse li {
    padding: 0.3rem;
  }
}
@media (max-width: 992px) and (max-height: 280px) {
  .navbar {
    padding-top: 0rem !important;
  }
  .collapse li {
    padding: 0rem;
  }
  .nav-link {
    padding: 0.35rem 0rem;
  }
}
</style>
