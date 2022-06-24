<template>
  <div>
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Imagem />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-fe/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Imagem from "@/views/nossa-fe/Imagem.vue";

export default {
  name: "NossaFeView",
  components: {
    NavbarFixed,
    Videos,
    TextPages,
    Imagem,
  },
};
</script>
