<template>
  <div>
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Box />
    <Carousel />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-gente/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Box from "@/views/nossa-gente/Box.vue";
import Carousel from "@/views/nossa-gente/Carousel.vue";

export default {
  name: "NossaGenteView",
  components: {
    NavbarFixed,
    Videos,
    TextPages,
    Box,
    Carousel,
  },
};
</script>
