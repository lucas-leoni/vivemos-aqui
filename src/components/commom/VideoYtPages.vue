<template>
  <div>
    <VideoYt1 v-if="nossaCasa()" />
    <VideoYt2 v-if="nossaGente()" />
    <VideoYt3 v-if="nossaFe()" />
    <VideoYt4 v-if="nossaLuta()" />
  </div>
</template>

<script>
import VideoYt1 from "@/views/nossa-casa/videos/VideoYt.vue";
import VideoYt2 from "@/views/nossa-gente/videos/VideoYt.vue";
import VideoYt3 from "@/views/nossa-fe/videos/VideoYt.vue";
import VideoYt4 from "@/views/nossa-luta/videos/VideoYt.vue";

export default {
  name: "VideoYtPages",
  components: {
    VideoYt1,
    VideoYt2,
    VideoYt3,
    VideoYt4,
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
