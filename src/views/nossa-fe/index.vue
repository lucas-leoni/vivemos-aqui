<template>
  <div>
    <NavbarFixed />
    <Videos />
    <TextPages />
    <!-- <Texts /> -->
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-fe/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";
import Texts from "@/views/nossa-fe/texts/Texts.vue";

export default {
  name: "NossaFeView",
  components: {
    NavbarFixed,
    Videos,
    TextPages,
    Texts,
  },
};
</script>
