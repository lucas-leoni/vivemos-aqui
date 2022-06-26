<template>
  <div>
    <BgNavbar />
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Infografico />
    <Legenda />
    <Capitulos />
  </div>
</template>

<script>
import BgNavbar from "@/components/commom/BgNavbar.vue";
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-casa/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Infografico from "@/views/nossa-casa/Infografico.vue";
import Legenda from "@/views/nossa-casa/Legenda.vue";
import Capitulos from "@/components/commom/Capitulos.vue";

export default {
  name: "NossaCasaView",
  components: {
    BgNavbar,
    NavbarFixed,
    Videos,
    TextPages,
    Infografico,
    Legenda,
    Capitulos,
  },
};
</script>
