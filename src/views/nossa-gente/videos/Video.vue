<template>
  <div>
    <video
      id="video-bg-page"
      class="video-horizontal"
      poster="../../../assets/images/poster-nossa-gente.jpg"
      loop=""
      muted=""
      autoplay=""
    >
      <source type="video/mp4" src="../../../assets/videos/nossa-gente.mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "Video",
};
</script>

<style scoped>
video {
  width: 100%;
}
div {
  background-color: #e4a84e;
}
</style>