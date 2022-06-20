<template>
  <div>
    <video
      id="video-bg"
      loop=""
      muted=""
      autoplay=""
    >
      <source type="video/mp4" src="../../assets/videos/home.mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "Video",
};
</script>

<style scoped>
#video-bg {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 101%;
  min-height: 101%;
  width: auto;
  height: auto;
  z-index: -100;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  /* background: url(../../assets/images/poster.png) no-repeat; */
  background-size: cover;
  -webkit-transition: 1s opacity;
  transition: 1s opacity;
}
</style>
