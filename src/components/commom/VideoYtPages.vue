<template>
  <div>
    <VideoYt1 v-if="alemDeEstar()" />
    <VideoYt2 v-if="alemDoSom()" />
    <VideoYt3 v-if="alemDoMar()" />
  </div>
</template>

<script>
import VideoYt1 from "@/views/alem-de-estar/videos/VideoYt.vue";
import VideoYt2 from "@/views/alem-do-som/videos/VideoYt.vue";
import VideoYt3 from "@/views/alem-do-mar/videos/VideoYt.vue";

export default {
  name: "VideoYtPages",
  components: {
    VideoYt1,
    VideoYt2,
    VideoYt3,
  },
  methods: {
    alemDeEstar() {
      if (this.$route.name === "AlemDeEstar") {
        return true;
      }
    },
    alemDoSom() {
      if (this.$route.name === "AlemDoSom") {
        return true;
      }
    },
    alemDoMar() {
      if (this.$route.name === "AlemDoMar") {
        return true;
      }
    },
  },
};
</script>
