<template>
  <div class="bg py-5 px-5">
    <div class="container d-flex justify-content-center flex-column px-0">
      <div class="row justify-content-center mt-3">
        <div class="col-7"></div>
        <div class="col-3">
          <p class="mt-4 text-white">
            <TextColumn1 />
          </p>
          <p id="p-color" class="mt-4">
            <TextColumn2 />
          </p>
        </div>
        <div id="coluna-mobile" class="col">
          <p class="text-white">
            <TextColumn1 />
          </p>
          <p id="p-color" class="mt-4">
            <TextColumn2 />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextColumn1 from "@/views/nossa-fe/texts/TextColumn9.vue";
import TextColumn2 from "@/views/nossa-fe/texts/TextColumn10.vue";

export default {
  name: "Text4",
  components: {
    TextColumn1,
    TextColumn2,
  },
};
</script>

<style scoped>
p {
  font-size: 1.5rem;
}
#p-color {
  color: #6ecff6;
}
#coluna-mobile {
  display: none;
}
.bg {
  background-image: url(../../../assets/images/bg-text-2.png);
  background-repeat: no-repeat;
  background-size: cover;
}
@media (max-width: 992px) {
  .col-7, .col-3 {
    display: none;
  }
  #coluna-mobile {
    display: block;
  }
  p {
    margin-bottom: 0;
  }
  .bg {
    background-position: center;
  }
}
</style>
