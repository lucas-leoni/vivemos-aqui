<template>
  <div>
    <TextPages />
    <Text1 />
    <Text2 />
    <Text3 />
    <Text4 />
    <Text5 />
  </div>
</template>

<script>
import TextPages from "@/components/commom/TextPages.vue";
import Text1 from "@/views/nossa-fe/texts/Text.vue";
import Text2 from "@/views/nossa-fe/texts/Text2.vue";
import Text3 from "@/views/nossa-fe/texts/Text3.vue";
import Text4 from "@/views/nossa-fe/texts/Text4.vue";
import Text5 from "@/views/nossa-fe/texts/Text5.vue";

export default {
  name: "Texts",
  components: {
    TextPages,
    Text1,
    Text2,
    Text3,
    Text4,
    Text5,
  },
};
</script>
