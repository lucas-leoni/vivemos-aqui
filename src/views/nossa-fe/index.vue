<template>
  <div>
    <BgNavbar />
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Imagem />
    <ProximoCapitulo />
  </div>
</template>

<script>
import BgNavbar from "@/components/commom/BgNavbar.vue";
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-fe/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Imagem from "@/views/nossa-fe/Imagem.vue";
import ProximoCapitulo from "@/components/commom/ProximoCapitulo.vue";

export default {
  name: "NossaFeView",
  components: {
    BgNavbar,
    NavbarFixed,
    Videos,
    TextPages,
    Imagem,
    ProximoCapitulo,
  },
};
</script>
