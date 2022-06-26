<template>
  <div class="bg">
    <div class="container text-white py-5 px-5">
      <div class="d-flex justify-content-center flex-column">
        <div class="row justify-content-center">
          <div class="col-8">
            <Subtitle1 />
          </div>
          <!-- <div id="esconder" class="col"></div> -->
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-8">
            <p>
              <TextColumn1 />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitle1 from "@/views/nossa-luta/texts/SubtitleBox.vue";
import TextColumn1 from "@/views/nossa-luta/texts/TextColumnBox.vue";

export default {
  name: "Box",
  components: {
    Subtitle1,
    TextColumn1,
  },
};
</script>

<style scoped>
.bg {
  background-color: #b41917;
}
@media (max-width: 992px) {
  .col-10 {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .flex-column {
    padding: 0px !important;
  }
  p {
    margin-bottom: 0;
  }
}
</style>
