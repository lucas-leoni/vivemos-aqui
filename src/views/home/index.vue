<template>
  <div>
    <Navbar :border="homeBorder" />
    <Video />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/views/home/Navbar.vue";
import Video from "@/views/home/Video.vue";
import Footer from "@/views/home/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Video,
    Footer,
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
