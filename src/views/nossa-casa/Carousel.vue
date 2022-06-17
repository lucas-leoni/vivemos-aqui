<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide carousel-fade"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        class="active bg-dark"
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
      ></li>
      <li
        class="bg-dark"
        data-target="#carouselExampleIndicators"
        data-slide-to="1"
      ></li>
      <li
        class="bg-dark"
        data-target="#carouselExampleIndicators"
        data-slide-to="2"
      ></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="10000">
        <img src="../../assets/images/carousel-1.jpg" class="d-block w-100" />
      </div>
      <div class="carousel-item" data-interval="10000">
        <img src="../../assets/images/carousel-2.jpg" class="d-block w-100" />
      </div>
      <div class="carousel-item" data-interval="10000">
        <img src="../../assets/images/carousel-3.jpg" class="d-block w-100" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-target="#carouselExampleIndicators"
      data-slide="prev"
    >
      <span aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
      </span>
      <span class="sr-only">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-target="#carouselExampleIndicators"
      data-slide="next"
    >
      <span aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      </span>
      <span class="sr-only">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
svg {
  fill: black;
}
</style>
