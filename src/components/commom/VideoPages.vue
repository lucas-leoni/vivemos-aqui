<template>
  <div class="video-page-top">
    <Video1 v-if="nossaCasa()" />
    <Video2 v-if="nossaGente()" />
    <Video3 v-if="nossaFe()" />
    <Video4 v-if="nossaLuta()" />
  </div>
</template>

<script>
import Video1 from "@/views/nossa-casa/videos/Video.vue";
import Video2 from "@/views/nossa-gente/videos/Video.vue";
import Video3 from "@/views/nossa-fe/videos/Video.vue";
import Video4 from "@/views/nossa-luta/videos/Video.vue";

export default {
  name: "VideoPages",
  components: {
    Video1,
    Video2,
    Video3,
    Video4,
  },
  methods: {
    nossaCasa() {
      if (this.$route.name === "NossaCasa") {
        return true;
      }
    },
    nossaGente() {
      if (this.$route.name === "NossaGente") {
        return true;
      }
    },
    nossaFe() {
      if (this.$route.name === "NossaFe") {
        return true;
      }
    },
    nossaLuta() {
      if (this.$route.name === "NossaLuta") {
        return true;
      }
    },
  },
};
</script>

<style scoped>
.video-page-top {
  position: relative;
  max-height: 90vh;
  display: block;
  overflow: hidden;
  z-index: 1;
}
@media (min-width: 993px) and (max-width: 1240px) {

}
@media (max-width: 500px) {
  .video-page-top {
    height: auto;
  }
}
</style>
