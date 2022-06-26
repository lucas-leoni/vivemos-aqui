<template>
  <div>
    <video
      id="video-bg"
      class="video-horizontal"
      poster="../../assets/images/poster-home.jpg"
      loop=""
      muted=""
      autoplay=""
    >
      <source type="video/mp4" src="../../assets/videos/home.mp4" />
    </video>
    <video
      id="video-bg"
      class="video-vertical"
      poster="../../assets/images/poster-home.jpg"
      loop=""
      muted=""
      autoplay=""
    >
      <source type="video/mp4" src="../../assets/videos/home-vertical.mp4" />
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
  width: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background: url(../../assets/images/poster-home.jpg) no-repeat;
  background-size: cover;
  -webkit-transition: 1s opacity;
  transition: 1s opacity;
}
.video-vertical {
  display: none;
}
@media (min-width: 500px) and (max-width: 700px) {
  .video-horizontal {
    display: none;
  }
  .video-vertical {
    display: block;
  }
}
@media (max-width: 499px) {
  .video-horizontal {
    display: none;
  }
  .video-vertical {
    display: block;
  }
  #video-bg {
    height: 100%;
  }
}
</style>
