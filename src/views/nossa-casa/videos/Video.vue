<template>
  <div>
    <video
      id="video-bg-page"
      class="video-horizontal"
      poster="../../../assets/images/poster-nossa-casa.jpg"
      loop=""
      muted=""
      autoplay=""
    >
      <source type="video/mp4" src="../../../assets/videos/nossa-casa.mp4" />
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
  background-color: #584212;
}
</style>
