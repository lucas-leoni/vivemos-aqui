<template>
  <div class="bg-white py-5 px-5">
    <div class="container d-flex justify-content-center flex-column px-0">
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
import TextColumn1 from "@/views/alem-do-mar/texts/TextColumn5.vue";
import TextColumn2 from "@/views/alem-do-mar/texts/TextColumn6.vue";

export default {
  name: "Text2",
  components: {
    TextColumn1,
    TextColumn2,
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
