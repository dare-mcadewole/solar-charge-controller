<template>
  <div class="hello">
    <img src="/unilorin.png" />
    <h1 class="xheading is-size-4 is-capitalized">
      {{ $store.getters.appTitle }}
    </h1>
    <section>
      <b-progress size="is-small" type="is-danger"></b-progress>
    </section>
    <p class="is-size-6">Loading application ...</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      ld: 0
    }
  },
  computed: {
    loadingDots () {
      return this.ld % 3;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  img {
    height: 120px;
  }
}

h1 {
  color: #ff9f41;
}
</style>
