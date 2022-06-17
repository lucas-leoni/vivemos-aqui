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
import Videos from "@/views/nossa-casa/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Carousel from "@/views/nossa-casa/Carousel.vue";

export default {
  name: "NossaCasaView",
  components: {
    NavbarFixed,
    Videos,
    TextPages,
    Carousel,
  },
};
</script>
