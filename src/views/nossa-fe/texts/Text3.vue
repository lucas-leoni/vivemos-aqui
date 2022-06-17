<template>
  <div class="bg py-5 px-5">
    <div class="container d-flex justify-content-center flex-column px-0">
      <div class="row">
        <div class="col-11 d-flex justify-content-center mt-5">
          <Subtitle1 />
        </div>
      </div>
      <div class="row justify-content-between mt-3">
        <div class="col-5">
          <p class="text-justify mt-4">
            <TextColumn1 />
          </p>
        </div>
        <div class="col-5">
          <p class="text-justify mt-4">
            <TextColumn2 />
          </p>
        </div>
        <div id="coluna-mobile" class="col">
          <p class="text-justify my-4">
            <TextColumn1 />
            <TextColumn2 />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitle1 from "@/views/nossa-fe/texts/Subtitle5.vue";
import TextColumn1 from "@/views/nossa-fe/texts/TextColumn7.vue";
import TextColumn2 from "@/views/nossa-fe/texts/TextColumn8.vue";

export default {
  name: "Text2",
  components: {
    TextColumn1,
    TextColumn2,
    Subtitle1,
  },
};
</script>

<style scoped>
.bg {
  background-color: #D7ECFA;
}
p {
  line-height: 1.9;
}
#coluna-mobile {
  display: none;
}
@media (max-width: 992px) {
  .col-5 {
    display: none;
  }
  #coluna-mobile {
    display: block;
  }
  p {
    margin-bottom: 0;
  }
}
</style>
