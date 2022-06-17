<template>
  <div>
    <NavbarFixed />
    <Videos />
    <TextPages />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Videos from "@/views/nossa-luta/videos/Videos.vue";
import TextPages from "@/components/commom/TextPages.vue";

export default {
  name: "NossaLutaView",
  components: {
    NavbarFixed,
    Videos,
    TextPages,
  },
};
</script>
