<template>
  <div class="bg-player mt-3">
    <!-- <img src="../../assets/images/poster-player.png" /> -->
    <!-- <iframe
      src="https://open.spotify.com/embed/track/2FY7b99s15jUprqC0M5NCT?utm_source=generator"
      width="100%"
      height="80"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe> -->
    <div class="container px-0 py-5">
      <div class="row py-4"></div>
      <div id="centralizar" class="row">
        <div class="col-4">
          <TextPlayer />
          <audio class="my-4" controls src="../../../assets/audio/audio.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <TextPlayer2 />
          <!-- <figure>
          <figcaption class="text-white mb-5">
            <TextPlayer />
          </figcaption>
          <audio controls src="../../assets/audio/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption class="text-white mt-5">
            <TextPlayer2 />
          </figcaption>
        </figure> -->
        </div>
      </div>
      <div class="row py-4"></div>
    </div>
  </div>
</template>

<script>
import TextPlayer from "@/views/alem-do-som/player/TextPlayer.vue";
import TextPlayer2 from "@/views/alem-do-som/player/TextPlayer2.vue";

export default {
  name: "Player",
  components: {
    TextPlayer,
    TextPlayer2,
  },
};
</script>

<style scoped>
/* img {
  width: 100%;
} */
.bg-player {
  /* position: relative; */
  background-image: url(../../../assets/images/poster-player.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
/* .row {
  position: absolute;
  left: 18%;
  top: 30%;
} */
@media (max-width: 992px) {
  .col-4 {
    max-width: none;
  }
  #centralizar {
    justify-content: center;
  }
}
</style>
