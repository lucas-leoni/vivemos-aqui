<template>
  <div>
    <NavbarFixed />
    <Videos />
    <Texts />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/alem-das-memorias/videos/Videos.vue";
import Texts from "@/views/alem-das-memorias/texts/Texts.vue";

export default {
  name: "AlemDasMemoriasView",
  components: {
    NavbarFixed,
    Videos,
    Texts,
  },
};
</script>
