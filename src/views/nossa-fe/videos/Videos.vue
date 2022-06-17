<template>
  <div>
    <VideoPages />
    <VideoYtPages />
  </div>
</template>

<script>
import VideoPages from "@/components/commom/VideoPages.vue";
import VideoYtPages from "@/components/commom/VideoYtPages.vue";

export default {
  name: "Videos",
  components: {
    VideoPages,
    VideoYtPages,
  },
};
</script>
