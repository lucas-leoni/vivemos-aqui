<template>
  <div>
    <NavbarFixed />
    <VideoPages />
    <VideoYtPages />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import VideoPages from "@/components/commom/VideoPages.vue";
import VideoYtPages from "@/components/commom/VideoYtPages.vue";

export default {
  name: "OProjetoView",
  components: {
    NavbarFixed,
    VideoPages,
    VideoYtPages,
  },
};
</script>
