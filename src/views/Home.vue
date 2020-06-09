<template>
  <div class="home">
    <HelloWorld v-if="loading" />

    <section class="" v-else>
      <div class="header">
        <div class="app-title">
          <img src="/unilorin.png" />
          <h2 class="xheading">{{ $store.getters.appTitle }}</h2>
        </div>
        <h4 class="xheading is-size-5">
          <span>Power-Time Graph</span>
        </h4>
        
        <section class="columns graph-event">
          <div>
            <LineGraph @energy="updateEnergy" />
          </div>
        </section>
      </div>

      <div class="data-section">
        <section class="columns has-text-left">
          <Card
            icon="power-now.png"
            name="PV Power"
            :value="`${component.cu} kW`"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Card
            icon="energy.png"
            name="PV Energy"
            :value="`${component.mi} kWh`"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Card
            icon="house.jpg"
            name="Load Power"
            :value="`${component.e} kW`"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </section>

        <section class="columns has-text-left">
          <Card
            icon="battery-status.png"
            name="Voltage / CHG Current"
            :value="`${component.l}`"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Card
              icon="battery.png"
              name="Depth of Discharge"
              :value="`${component.dod}%`"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Card
              icon="battery-status.png"
              name="Charging Status"
              :value="`${component.bs}`"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </section>

        <section class="columns has-text-left">
          <Card
            icon="temperature.png"
            name="Temperature"
            :value="`${component.t}°C`"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Card
            icon="humidity.png"
            name="Humidity"
            :value="`${component.h}%`"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Card
            icon="sun.png"
            name="Solar Irradiance"
            :value="`${component.si} W/㎡`"
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
import LineGraph from '@/components/LineGraph.vue'

export default {
  name: 'home',

  mounted() {
    fetch(`${this.$API_URL}/components`)
    .then(res => res.json())
    .then((components) => {
      if (components.si) {
        this.component = components
      } else {
        alert('Could not get current state of components')
      }
      this.loading = false
    })

    // Bind component update event to channel
    this.$channel.bind('components-update', (data) => {
      // Go ahead and update this.component
      this.component = data
      // Object.assign(this.component, data)
    })

    // Bind component update event to channel
    this.$channel.bind('component-update', (data) => {
      this.component[data.component] = data.value | 'N/A'
    })
  },

  data () {
    return {
      loading: true,
      energy: 0,
      component: {
        si: 0,
        e: 0,
        cu: 0,
        t: 0,
        h: 0,
        dod: 0,
        l: '0V/0A',
        bs: 'N/A',
        mi: '-'
      }
    }
  },

  methods: {
    updateEnergy (e) {
      this.energy = e
    }
  },

  components: {
    HelloWorld,
    Card,
    LineGraph
  }
}
</script>
<style scoped lang="scss">
.app-title {
  margin: .6em auto 1.5em !important;
  width: 75%;
  font-size: 25px;
  display: flex;
  align-items: center;

  img {
    height: 70px;
    vertical-align: middle;
    margin-right: .7em;
  }
}

.graph-event {
    // max-width: 1100px;
    // margin: auto;
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
  max-width: 1100px;
  margin: auto;
  margin-top: -60px;
}

.header {
  padding: .5em 2em;
  margin-bottom: 15px;
  background: rgba(0,0,0,0.13);

  > h3, h2 {
    margin: 0;
    color: #ff9f41;
  }
}

h4 > span {
  padding: .5em 1em;
  background-color: #523b93;
  border-radius: 2em;
}

@media screen and (max-width: 360px) {
  .data-section {
    width: 90%;
  }

  .app-title {
    width: 100%;
    font-size: 16px;
    text-align: left;

    img {
      height: 40px;
      display: block;
      text-align: center;
    }
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
