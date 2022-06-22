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
    <video
      id="video-bg"
      class="video-vertical"
      poster="../../../assets/images/poster-nossa-casa.jpg"
      loop=""
      muted=""
      autoplay=""
    >
      <source
        type="video/mp4"
        src="../../../assets/videos/nossa-casa-vertical.mp4"
      />
    </video>
  </div>
</template>

<script>
export default {
  name: "Video",
};
</script>

<style scoped>
#video-bg-page {
  /* min-width: 101%;
  min-height: 101%; */
  width: 100%;
  background: url(../../../assets/images/poster-nossa-casa.jpg) no-repeat;
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
    max-width: 100%;
  }
  #video-bg {
    height: 100%;
  }
}
</style>
