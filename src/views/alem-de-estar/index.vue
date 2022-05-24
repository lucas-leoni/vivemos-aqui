<template>
  <div>
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Carousel />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/alem-de-estar/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Carousel from "@/views/alem-de-estar/Carousel.vue";

export default {
  name: "AlemDeEstarView",
  components: {
    NavbarFixed,
    Videos,
    TextPages,
    Carousel,
  },
};
</script>
