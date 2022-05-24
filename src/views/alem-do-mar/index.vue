<template>
  <div>
    <NavbarFixed />
    <Videos />
    <Texts />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/alem-do-mar/videos/Videos.vue";
import Texts from "@/views/alem-do-mar/texts/Texts.vue";

export default {
  name: "AlemDoMarView",
  components: {
    NavbarFixed,
    Videos,
    Texts,
  },
};
</script>
