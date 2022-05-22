<template>
  <div>
    <NavbarFixed />
    <VideoPages />
    <VideoYtPages />
    <TextPages />
  </div>
</template>

<script>
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import VideoPages from "@/components/commom/VideoPages.vue";
import VideoYtPages from "@/components/commom/VideoYtPages.vue";
import TextPages from "@/components/commom/TextPages.vue";

export default {
  name: "AlemDoMarView",
  components: {
    NavbarFixed,
    VideoPages,
    VideoYtPages,
    TextPages,
  },
};
</script>
