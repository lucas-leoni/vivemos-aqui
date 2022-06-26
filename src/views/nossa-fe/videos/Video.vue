<template>
  <div>
    <video
      id="video-bg-page"
      class="video-horizontal"
      poster="../../../assets/images/poster-nossa-fe.jpg"
      loop=""
      muted=""
      autoplay=""
    >
      <source type="video/mp4" src="../../../assets/videos/nossa-fe.mp4" />
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
  background-color: #1e3b1d;
}
</style>
