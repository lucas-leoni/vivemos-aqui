<template>
  <div>
    <div class="bg text-white py-5 px-5">
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
  </div>
</template>

<script>
import Subtitle1 from "@/views/nossa-luta/texts/SubtitleBox2.vue";
import TextColumn1 from "@/views/nossa-luta/texts/TextColumnBox2.vue";

export default {
  name: "Box2",
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
  #esconder {
    display: none;
  }
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
