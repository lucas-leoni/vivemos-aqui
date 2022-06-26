<template>
  <div>
    <BgNavbar />
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Boxs />
    <Imagem />
    <Capitulos />
  </div>
</template>

<script>
import BgNavbar from "@/components/commom/BgNavbar.vue";
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-luta/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Boxs from "@/views/nossa-luta/Boxs.vue";
import Imagem from "@/views/nossa-luta/Imagem.vue";
import Capitulos from "@/components/commom/Capitulos.vue";

export default {
  name: "NossaLutaView",
  components: {
    BgNavbar,
    NavbarFixed,
    Videos,
    TextPages,
    Boxs,
    Imagem,
    Capitulos,
  },
};
</script>
