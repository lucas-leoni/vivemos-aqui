<template>
  <div>
    <BgNavbar />
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Imagem />
    <Capitulos />
  </div>
</template>

<script>
import BgNavbar from "@/components/commom/BgNavbar.vue";
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-fe/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Imagem from "@/views/nossa-fe/Imagem.vue";
import Capitulos from "@/components/commom/Capitulos.vue";

export default {
  name: "NossaFeView",
  components: {
    BgNavbar,
    NavbarFixed,
    Videos,
    TextPages,
    Imagem,
    Capitulos,
  },
};
</script>
