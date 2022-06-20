<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style> 
.navbar {
  font-weight: bold;
  font-size: 1.35rem;
}
h2{
  font-family: 'KingTrufle';
}
.navbar, p, em {
  font-family: 'Akrobat';
}

@font-face {
    font-family: 'KingTrufle';
    src: url('../src/assets/fonts/king-trufle-font/KingTrufle-Regular.eot');
    src: url('../src/assets/fonts/king-trufle-font/KingTrufle-Regular.eot?#iefix') format('embedded-opentype'),
         url('../src/assets/fonts/king-trufle-font/KingTrufle-Regular.woff') format('woff'),
         url('../src/assets/fonts/king-trufle-font/KingTrufle-Regular.ttf') format('truetype');
             font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
}
@font-face {
    font-family: 'Akrobat';
    src: url('../src/assets/fonts/akrobat-font/Akrobat-Regular.eot');
    src: url('../src/assets/fonts/akrobat-font/Akrobat-Regular.eot?#iefix') format('embedded-opentype'),
         url('../src/assets/fonts/akrobat-font/Akrobat-Regular.woff') format('woff'),
         url('../src/assets/fonts/akrobat-font/Akrobat-Regular.ttf') format('truetype');
             font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
}
</style>