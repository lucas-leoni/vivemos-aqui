<template>
  <div class="bg py-5 px-5">
    <div class="container d-flex justify-content-center flex-column px-0">
      <div class="row justify-content-between">
        <div class="col">
          <Subtitle1 v-if="nossaCasa()" />
        </div>
        <div id="esconder" class="col"></div>
      </div>
      <div class="row justify-content-between mt-3">
        <div class="col">
          <p class="text-justify">
            <TextColumn1 v-if="nossaCasa()" />
            <TextColumn2 v-if="nossaCasa()" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitle1 from "@/views/nossa-casa/texts/Subtitle.vue";
import TextColumn1 from "@/views/nossa-casa/texts/TextColumn1.vue";
import TextColumn2 from "@/views/nossa-casa/texts/TextColumn2.vue";

export default {
  name: 'UmaColuna',
  components: {
    Subtitle1,
    TextColumn1,
    TextColumn2,
  },
  methods: {
    nossaCasa() {
      if (this.$route.name === "NossaCasa") {
        return true;
      }
    },
  },
}
</script>

<style scoped>
p {
  line-height: 1.9;
}
@media (max-width: 992px) {
  #esconder {
    display: none;
  }
  p {
    margin-bottom: 0;
  }
}
</style>