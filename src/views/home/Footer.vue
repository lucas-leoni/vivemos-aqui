<template>
  <footer class="p-5 d-flex justify-content-end fixed-bottom">
		<a href="https://faculdade.ielusc.br/arquivos/noticia/academicos-da-faculdade-ielusc-sao-finalistas-de-premio-de-jornalismo-em-sc/"
			title="Vencedor do Prêmio ACI OCESC de Jornalismo | Categoria Jornalismo Universitário"
			target="blank">
			<img src="../../assets/images/premio.png" alt="prêmio">
		</a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style scoped>
img {
  height: 4.5rem;
}
@media (min-width: 501px) and (max-width: 992px) {
	img {
  	height: 3rem;
	}
}
@media (max-width: 500px) {
	img {
  	height: 2.5rem;
	}
}
</style>