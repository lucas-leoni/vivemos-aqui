<template>
  <div>
    <Navbar :border="homeBorder" />
    <Video />
  </div>
</template>

<script>
import Navbar from "@/views/home/Navbar.vue";
import Video from "@/views/home/Video.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Video,
  },
  methods: {
    homeBorder() {
      if (this.$route.name === "home") {
        return "border";
      }
    },
  },
};
</script>
