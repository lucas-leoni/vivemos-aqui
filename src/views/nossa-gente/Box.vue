<template>
  <div class="bg ">
    <div class="container pt-5 pb-4 px-5">
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
    <div class="container pb-4 px-5">
      <div class="d-flex justify-content-center flex-column">
        <div class="row justify-content-center">
          <div class="col-8">
            <Subtitle2 />
          </div>
          <!-- <div id="esconder" class="col"></div> -->
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-8">
            <p>
              <TextColumn2 />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitle1 from "@/views/nossa-gente/texts/SubtitleBox.vue";
import TextColumn1 from "@/views/nossa-gente/texts/TextColumnBox.vue";
import Subtitle2 from "@/views/nossa-gente/texts/SubtitleBox2.vue";
import TextColumn2 from "@/views/nossa-gente/texts/TextColumnBox2.vue";

export default {
  name: "Box",
  components: {
    Subtitle1,
    TextColumn1,
    Subtitle2,
    TextColumn2,
  },
};
</script>

<style scoped>
.bg {
  background-color: #e4a84e;
}
@media (max-width: 992px) {
  .flex-column {
    padding: 0px !important;
  }
  p {
    margin-bottom: 0;
  }
}
</style>
