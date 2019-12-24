<template>
  <div class="home">
    <HelloWorld v-if="loading" />

    <section class="" v-else>
      <div class="header">
        <h3 class="xheading app-title">
          Solar Charge Controller
        </h3>
        <section class="columns graph-event">
          <!-- <h4 class="xheading is-size-4">Power-Time</h4> -->
          <div>
            <Graph />
          </div>
        </section>
      </div>

      <div class="data-section">
        <section class="columns has-text-left">
          <Card
            icon="sun"
            name="Solar Irradiance"
            value="100w/m2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Card
            icon="power"
            name="Exporting"
            value="100W"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Card
            icon="power-now"
            name="Current Usage"
            value="12W"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </section>

        <section class="columns has-text-left">
            <Card
              icon="temperature"
              name="Temperature"
              value="42C"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Card
              icon="humidity"
              name="Humidity"
              value="98%"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Card
              icon="battery"
              name="Depth of discharge"
              value="98%"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </section>

        <section class="columns has-text-left">
            <Card
              icon="load"
              name="Load"
              value="24V/2A"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Card
              icon="battery-status"
              name="Battery Status"
              value="Charging"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Card
              icon="device"
              name="Module ID"
              value="MPPT_4567"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </section>
      </div>
      

      <div class="event-notification">
        <b-notification
          type="is-success"
          size="is-small"
          has-icon
          :closable="false"
          role="alert">
          <h5 class="xheading has-text-weight-bold is-size-7">EVENTS</h5>
          <p class="is-size-7">System is OK</p>
        </b-notification>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/Card.vue'
import Graph from '@/components/Graph.vue'

export default {
  name: 'home',
  mounted() {
    setTimeout(() => this.loading = false, this.loadTime)
  },
  data () {
    return {
      loadTime: 3500,
      loading: true
    }
  },
  components: {
    HelloWorld,
    Card,
    Graph
  }
}
</script>
<style scoped lang="scss">
.app-title {
  margin: .6em auto !important;
  width: 75%;
  font-size: 25px;
}

.graph-event {
  // border-top: 1px dashed #DADADA;
  margin-top: 12px;
  padding-top: 20px;
  margin-bottom: 2em;

  > div {
    margin: auto;
  }
}

.event-notification {
  position: fixed;
  right: .7em;
  top: .7em;
}

.data-section {
  width: 75%;
  margin: auto;
  margin-top: -60px;
}

.header {
  padding: .5em 2em;
  margin-bottom: 15px;
  background: rgba(0,0,0,0.13);

  > h3 {
    margin: 0;
    color: #ff9f41;
  }
}

@media screen and (max-width: 360px) {
  .data-section {
    width: 90%;
  }

  .app-title {
    width: 100%;
    font-size: 23px;
  }

  .event-notification {
    position: relative;
    width: 90%;
    margin: auto;
  }

  svg {
    width: 420;
  }
}
</style>
