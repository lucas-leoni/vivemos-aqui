<template>
  <div>
    <div class="bg py-5 px-5">
      <div class="d-flex justify-content-center flex-column px-5">
        <div class="row justify-content-between">
          <div class="col">
            <Subtitle1 />
          </div>
          <div id="esconder" class="col"></div>
        </div>
        <div class="row justify-content-between mt-3">
          <div class="col-10">
            <p class="text-justify">
              <TextColumn1 />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg pb-5 px-5">
      <div class="d-flex justify-content-center flex-column px-5">
        <div class="row justify-content-between">
          <div class="col">
            <Subtitle2 />
          </div>
          <div id="esconder" class="col"></div>
        </div>
        <div class="row justify-content-between mt-3">
          <div class="col-10">
            <p class="text-justify">
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
</style>
