<template>
  <div>
    <BgNavbar />
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Infografico />
    <Legenda />
    <ProximoCapitulo />
  </div>
</template>

<script>
import BgNavbar from "@/components/commom/BgNavbar.vue";
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-casa/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Infografico from "@/views/nossa-casa/Infografico.vue";
import Legenda from "@/views/nossa-casa/Legenda.vue";
import ProximoCapitulo from "@/components/commom/ProximoCapitulo.vue";

export default {
  name: "NossaCasaView",
  components: {
    BgNavbar,
    NavbarFixed,
    Videos,
    TextPages,
    Infografico,
    Legenda,
    ProximoCapitulo,
  },
};
</script>
