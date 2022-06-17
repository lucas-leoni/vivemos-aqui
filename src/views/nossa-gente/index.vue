<template>
  <div>
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Player />
    <Carousel />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-gente/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Player from "@/views/nossa-gente/player/Player.vue";
import Carousel from "@/views/nossa-gente/Carousel.vue";

export default {
  name: "NossaGenteView",
  components: {
    NavbarFixed,
    Videos,
    TextPages,
    Player,
    Carousel,
  },
};
</script>
