<template>
  <div>
    <NavbarFixed />
    <Videos />
    <TextPages />
    <Infografico />
    <Legenda />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-casa/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Infografico from "@/views/nossa-casa/Infografico.vue";
import Legenda from "@/views/nossa-casa/Legenda.vue";

export default {
  name: "NossaCasaView",
  components: {
    NavbarFixed,
    Videos,
    TextPages,
    Infografico,
    Legenda,
  },
};
</script>
