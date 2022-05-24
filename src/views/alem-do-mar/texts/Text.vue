<template>
  <div class="bg py-5 px-5">
    <div class="container d-flex justify-content-center flex-column px-0">
      <div class="row justify-content-between mt-3">
        <div class="col-5 text-white">
          <Subtitle1 />
          <p class="text-justify mt-4">
            <TextColumn1 />
          </p>
        </div>
        <div id="esconder" class="col-1 border-right border-white"></div>
        <div class="col-5 text-white">
          <Subtitle2 />
          <p class="text-justify mt-4">
            <TextColumn2 />
          </p>
        </div>
        <div id="coluna-mobile" class="col text-white">
          <p class="text-justify">
            <Subtitle1 />
          </p>
          <p class="text-justify my-4">
            <TextColumn1 />
          </p>
          <p class="text-justify">
            <Subtitle2 />
          </p>
          <p class="text-justify my-4">
            <TextColumn2 />
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col text-white d-flex justify-content-center mt-5">
          <Subtitle3 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitle1 from "@/views/alem-do-mar/texts/Subtitle2.vue";
import Subtitle2 from "@/views/alem-do-mar/texts/Subtitle3.vue";
import TextColumn1 from "@/views/alem-do-mar/texts/TextColumn3.vue";
import TextColumn2 from "@/views/alem-do-mar/texts/TextColumn4.vue";
import Subtitle3 from "@/views/alem-do-mar/texts/Subtitle4.vue";

export default {
  name: "TextView",
  components: {
    Subtitle1,
    Subtitle2,
    TextColumn1,
    TextColumn2,
    Subtitle3
  },
};
</script>

<style scoped>
p {
  line-height: 1.9;
}
#coluna-mobile {
  display: none;
}
.bg {
  background-image: url(../../../assets/images/bg-text.png);
  background-repeat: no-repeat;
  background-size: cover;
}
@media (max-width: 992px) {
  #esconder {
    display: none;
  }
  .col-5 {
    display: none;
  }
  #coluna-mobile {
    display: block;
  }
  p {
    margin-bottom: 0;
  }
  .bg {
    background-position: center;
  }
}
</style>
