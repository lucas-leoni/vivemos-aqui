<template>
  <div>
    <BgNavbar />
    <NavbarFixed />
    <Imagem1 />
    <Pedro />
    <Kevin />
    <Agregados />
    <Capitulos />
  </div>
</template>

<script>
import BgNavbar from "@/components/commom/BgNavbar.vue";
import NavbarFixed from "@/components/commom/NavbarFixed.vue";
import Imagem1 from "@/views/o-projeto/imagens/Imagem1.vue";
import Pedro from "@/views/o-projeto/Pedro.vue";
import Kevin from "@/views/o-projeto/Kevin.vue";
import Agregados from "@/views/o-projeto/Agregados.vue";
import Capitulos from "@/components/commom/Capitulos.vue";

export default {
  name: "OProjetoView",
  components: {
    BgNavbar,
    NavbarFixed,
    Imagem1,
    Pedro,
    Kevin,
    Agregados,
    Capitulos,
  },
};
</script>
