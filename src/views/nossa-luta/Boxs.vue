<template>
  <div>
    <Box />
    <div class="container px-5 py-5">
      <div class="d-flex justify-content-center flex-column">
        <div class="row justify-content-center">
          <div class="col-8">
            <p>
              A advogada também foi crítica às propostas oferecidas pelo
              prefeito da cidade de Joinville, Adriano Silva, às famílias Deni.
              Para ela, são “propostas de alguém que nunca viveu uma experiência
              como essa”, refletindo preconceito e higienismo, por isso não
              merecem nem ser consideradas.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Box2 />
    <div class="container px-5 py-5">
      <div class="d-flex justify-content-center flex-column">
        <div class="row justify-content-center">
          <div class="col-8">
            <p>
              Antes que você vá embora…
              <a href="https://linklist.bio/vivemosaqui"
                ><b>aqui tem um banco de dados</b></a
              >
              com todos os materiais que saíram na imprensa sobre o caso dos
              Deni. Esse banco também será alimentado com atualizações da
              situação.
            </p>
          </div>
        </div>
      </div>
    </div>
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
a {
  color: #b41917;
  text-decoration: underline;
  font-weight: bold;
}
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
