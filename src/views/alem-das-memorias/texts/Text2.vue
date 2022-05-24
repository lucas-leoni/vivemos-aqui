<template>
  <div>
    <div id="esconder" class="container p-0">
      <hr />
    </div>
    <div id="coluna-mobile" class="container px-5">
      <hr />
    </div>
    <div class="bg py-5 px-5">
      <div class="container d-flex justify-content-center flex-column px-0">
        <div class="row justify-content-between">
          <div class="col">
            <Subtitle />
          </div>
          <div id="esconder" class="col"></div>
        </div>
        <div class="row justify-content-between mt-3">
          <div class="col-5 pt-2">
            <iframe
              width="100%"
              height="49%"
              src="https://www.youtube.com/embed/O5EzpJIMtUg?rel=0&amp;showinfo=0"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
            <p class="text-justify mt-5">
              <TextColumn1 />
            </p>
          </div>
          <div class="col-5">
            <p class="text-justify">
              <TextColumn2 />
            </p>
          </div>
          <div id="coluna-mobile" class="col">
            <p class="text-justify">
              <iframe
                width="100%"
                height="49%"
                src="https://www.youtube.com/embed/O5EzpJIMtUg?rel=0&amp;showinfo=0"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </p>
            <p class="text-justify my-5">
              <TextColumn1 />
            </p>
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
import Subtitle from "@/views/alem-das-memorias/texts/Subtitle2.vue";
import TextColumn1 from "@/views/alem-das-memorias/texts/TextColumn3.vue";
import TextColumn2 from "@/views/alem-das-memorias/texts/TextColumn4.vue";

export default {
  name: "TextPages",
  components: {
    Subtitle,
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
}
</style>
