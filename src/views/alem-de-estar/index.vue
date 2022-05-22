<template>
  <div>
    <NavbarFixed />
    <VideoPages />
    <VideoYtPages />
    <TextPages />
    <Carousel />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import VideoPages from "@/components/commom/VideoPages.vue";
import VideoYtPages from "@/components/commom/VideoYtPages.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Carousel from "@/views/alem-de-estar/Carousel.vue";

export default {
  name: "AlemDeEstarView",
  components: {
    NavbarFixed,
    VideoPages,
    VideoYtPages,
    TextPages,
    Carousel,
  },
};
</script>
