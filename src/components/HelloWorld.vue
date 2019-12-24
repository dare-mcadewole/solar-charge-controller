<template>
  <div class="hello">
    <h1 class="xheading is-size-2 is-capitalized">
      Solar Charge Controller
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
}

h1 {
  color: #ff9f41;
}
</style>
