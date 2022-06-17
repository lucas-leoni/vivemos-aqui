<template>
  <div>
    <NavbarFixed />
    <Videos />
    <Texts />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-fe/videos/Videos.vue";
import Texts from "@/views/nossa-fe/texts/Texts.vue";

export default {
  name: "NossaFeView",
  components: {
    NavbarFixed,
    Videos,
    Texts,
  },
};
</script>
