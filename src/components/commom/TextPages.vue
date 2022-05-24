<template>
  <div class="bg py-5 px-5">
    <div class="container d-flex justify-content-center flex-column px-0">
      <div class="row justify-content-between">
        <div class="col">
          <Subtitle1 v-if="alemDeEstar()" />
          <Subtitle2 v-if="alemDoSom()" />
          <Subtitle3 v-if="alemDoMar()" />
        </div>
        <div id="esconder" class="col"></div>
      </div>
      <div class="row justify-content-between mt-3">
        <div class="col-5">
          <p class="text-justify">
            <TextColumn1 v-if="alemDeEstar()" />
            <TextColumn3 v-if="alemDoSom()" />
            <TextColumn5 v-if="alemDoMar()" />
          </p>
        </div>
        <div class="col-5">
          <p class="text-justify">
            <TextColumn2 v-if="alemDeEstar()" />
            <TextColumn4 v-if="alemDoSom()" />
            <TextColumn6 v-if="alemDoMar()" />
          </p>
        </div>
        <div id="coluna-mobile" class="col">
          <p class="text-justify">
            <TextColumn1 v-if="alemDeEstar()" />
            <TextColumn2 v-if="alemDeEstar()" />
            <TextColumn3 v-if="alemDoSom()" />
            <TextColumn4 v-if="alemDoSom()" />
            <TextColumn5 v-if="alemDoMar()" />
            <TextColumn6 v-if="alemDoMar()" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitle1 from "@/views/alem-de-estar/texts/Subtitle.vue";
import TextColumn1 from "@/views/alem-de-estar/texts/TextColumn1.vue";
import TextColumn2 from "@/views/alem-de-estar/texts/TextColumn2.vue";
import Subtitle2 from "@/views/alem-do-som/texts/Subtitle.vue";
import TextColumn3 from "@/views/alem-do-som/texts/TextColumn1.vue";
import TextColumn4 from "@/views/alem-do-som/texts/TextColumn2.vue";
import Subtitle3 from "@/views/alem-do-mar/texts/Subtitle.vue";
import TextColumn5 from "@/views/alem-do-mar/texts/TextColumn1.vue";
import TextColumn6 from "@/views/alem-do-mar/texts/TextColumn2.vue";

export default {
  name: "TextPages",
  components: {
    Subtitle1,
    TextColumn1,
    TextColumn2,
    Subtitle2,
    TextColumn3,
    TextColumn4,
    Subtitle3,
    TextColumn5,
    TextColumn6,
  },
  methods: {
    alemDeEstar() {
      if (this.$route.name === "AlemDeEstar") {
        return true;
      }
    },
    alemDoSom() {
      if (this.$route.name === "AlemDoSom") {
        return true;
      }
    },
    alemDoMar() {
      if (this.$route.name === "AlemDoMar") {
        return true;
      }
    },
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
