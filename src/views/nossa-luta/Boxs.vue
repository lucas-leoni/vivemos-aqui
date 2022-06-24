<template>
  <div>
    <Box />
    <div class="bg py-5 px-5">
      <div class="d-flex justify-content-center flex-column px-5">
        <div class="row justify-content-between mt-3">
          <div class="col-10">
            <p class="text-justify">
              <span>
                A advogada também foi crítica às propostas oferecidas pelo
                prefeito da cidade de Joinville, Adriano Silva, às famílias
                Deni. Para ela, são “propostas de alguém que nunca viveu uma
                experiência como essa”, refletindo preconceito e higienismo, por
                isso não merecem nem ser consideradas.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Box2 />
  </div>
</template>

<script>
import Box from "@/views/nossa-luta/Box.vue";
import Box2 from "@/views/nossa-luta/Box2.vue";

export default {
  name: "Boxs",
  components: {
    Box,
    Box2,
  },
};
</script>

<style scoped>
@media (max-width: 992px) {
  .col-10 {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .flex-column {
    padding: 0px !important;
  }
  p {
    margin-bottom: 0;
  }
}
</style>
