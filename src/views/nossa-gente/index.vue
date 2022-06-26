<template>
  <div>
    <BgNavbar />
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Box />
    <Carousel />
    <ProximoCapitulo />
  </div>
</template>

<script>
import BgNavbar from "@/components/commom/BgNavbar.vue";
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-gente/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Box from "@/views/nossa-gente/Box.vue";
import Carousel from "@/views/nossa-gente/Carousel.vue";
import ProximoCapitulo from "@/components/commom/ProximoCapitulo.vue";

export default {
  name: "NossaGenteView",
  components: {
    BgNavbar,
    NavbarFixed,
    Videos,
    TextPages,
    Box,
    Carousel,
    ProximoCapitulo,
  },
};
</script>
