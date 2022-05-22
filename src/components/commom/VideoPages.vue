<template>
  <div class="video-page-top">
    <Video1 v-if="alemDeEstar()" />
    <Video2 v-if="alemDoSom()" />
    <Video3 v-if="alemDoMar()" />
    <Video4 v-if="alemDasMemorias()" />
  </div>
</template>

<script>
import Video1 from "@/views/alem-de-estar/Video.vue";
import Video2 from "@/views/alem-do-som/Video.vue";
import Video3 from "@/views/alem-do-mar/Video.vue";
import Video4 from "@/views/alem-das-memorias/Video.vue";

export default {
  name: "VideoPages",
  components: {
    Video1,
    Video2,
    Video3,
    Video4,
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
    alemDasMemorias() {
      if (this.$route.name === "AlemDasMemorias") {
        return true;
      }
    },
  },
};
</script>

<style scoped>
#video-bg-page {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 101%;
  min-height: 101%;
  width: auto;
  height: auto;
  z-index: -100;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  /* background: url(../../assets/images/poster-alem-de-estar.png) no-repeat; */
  background-size: cover;
  -webkit-transition: 1s opacity;
  transition: 1s opacity;
}
.video-page-top {
  position: relative;
  height: 590px;
  display: block;
  overflow: hidden;
  z-index: 1;
}
</style>
