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
import Videos from "@/views/alem-do-som/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Player from "@/views/alem-do-som/player/Player.vue";
import Carousel from "@/views/alem-do-som/Carousel.vue";

export default {
  name: "AlemDoSomView",
  components: {
    NavbarFixed,
    Videos,
    TextPages,
    Player,
    Carousel,
  },
};
</script>
