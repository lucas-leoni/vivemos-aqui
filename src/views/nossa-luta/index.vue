<template>
  <div>
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Boxs />
    <Imagem />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-luta/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Boxs from "@/views/nossa-luta/Boxs.vue";
import Imagem from "@/views/nossa-luta/Imagem.vue";

export default {
  name: "NossaLutaView",
  components: {
    NavbarFixed,
    Videos,
    TextPages,
    Boxs,
    Imagem,
  },
};
</script>
