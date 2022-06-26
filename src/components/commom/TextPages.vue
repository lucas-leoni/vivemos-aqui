<template>
  <div class="div">
    <div class="container pt-5 pb-3 px-5">
      <div class="d-flex justify-content-center flex-column">
        <div class="row justify-content-between">
          <div class="col">
            <Subtitle1 v-if="nossaCasa()" />
            <Subtitle2 v-if="nossaGente()" />
            <Subtitle3 v-if="nossaFe()" />
            <Subtitle4 v-if="nossaLuta()" />
          </div>
          <div id="esconder" class="col"></div>
        </div>
        <div class="row justify-content-between mt-3">
          <div class="col">
            <p>
              <TextColumn1 v-if="nossaCasa()" />
              <TextColumn3 v-if="nossaGente()" />
              <TextColumn4 v-if="nossaFe()" />
              <TextColumn5 v-if="nossaLuta()" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <Imagem v-if="nossaCasa()" />
    <div v-if="nossaCasa()" class="container py-3 px-5">
      <div class="d-flex justify-content-center flex-column">
        <div class="row justify-content-between mt-3">
          <div class="col">
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
import Subtitle1 from "@/views/nossa-casa/texts/Subtitle.vue";
import TextColumn1 from "@/views/nossa-casa/texts/TextColumn1.vue";
import Imagem from "@/views/nossa-casa/Imagem.vue";
import TextColumn2 from "@/views/nossa-casa/texts/TextColumn2.vue";
import Subtitle2 from "@/views/nossa-gente/texts/Subtitle.vue";
import TextColumn3 from "@/views/nossa-gente/texts/TextColumn1.vue";
import Subtitle3 from "@/views/nossa-fe/texts/Subtitle.vue";
import TextColumn4 from "@/views/nossa-fe/texts/TextColumn1.vue";
import Subtitle4 from "@/views/nossa-luta/texts/Subtitle.vue";
import TextColumn5 from "@/views/nossa-luta/texts/TextColumn1.vue";

export default {
  name: "TextPages",
  components: {
    Subtitle1,
    TextColumn1,
    Imagem,
    TextColumn2,
    Subtitle2,
    TextColumn3,
    Subtitle3,
    TextColumn4,
    Subtitle4,
    TextColumn5,
  },
  methods: {
    nossaCasa() {
      if (this.$route.name === "NossaCasa") {
        return true;
      }
    },
    nossaGente() {
      if (this.$route.name === "NossaGente") {
        return true;
      }
    },
    nossaFe() {
      if (this.$route.name === "NossaFe") {
        return true;
      }
    },
    nossaLuta() {
      if (this.$route.name === "NossaLuta") {
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
