<template>
  <div>
    <video
      id="video-bg-page"
      class="video-horizontal"
      poster="../../../assets/images/poster-nossa-luta.jpg"
      loop=""
      muted=""
      autoplay=""
    >
      <source type="video/mp4" src="../../../assets/videos/nossa-luta.mp4" />
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
  background-color: #b41917;
}
</style>
