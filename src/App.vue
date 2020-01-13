<template>
  <div id="app">
    <router-view/>
    <footer>
      <p>
       Developed by Advanced Power and Green Energy Research group, Department of Electrical &amp;
       Electronics, University of Ilorin, Ilorin, Nigeria
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
html {
  // background-color: #f9fbfc !important;
  // background-color: #6943d0 !important;
  // background-color: #1a1f42 !important;
  // background: #563e99 !important;
  background: #333 !important;
  margin: 0;
}

body {
  margin: 0;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // width: 70%;
  margin: auto;
  color: #FFF;
  margin-bottom: 3em;
}

.xheading {
  font-family: 'Google Sans' !important;
  // font-size: 23px !important;
  font-weight: 300;
}

.blue {
  // color: #167df0 !important;
  color: #6943d0 !important;
}

footer {
  margin-top: 3em;
  font-family: 'Google Sans' !important;
  color: #AAA;
  font-size: 14px;
}
</style>
