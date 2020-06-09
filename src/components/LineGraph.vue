<template>
    <div class="line-graph-container">
        <h3 class="has-text-left is-size-6 has-text-white">
          Energy consumption is <span class="has-text-weight-bold is-size-5">{{
              energy
            }}kWh</span>
        </h3>
        <div id="line-graph" style="width: 1100px;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
        </div>
    </div>
</template>

<script>
export default {
    async mounted () {
        this.setupPowerLiveFeed()
        this.powerDataSet = await this.getPower()
        // Compute energy
        this.energy += this.powerAggregate * 3600
        var width = window.innerWidth * 0.9
        // Normalize chart width
        width = width > 1100 ? 1100 : width
        document.querySelector('#line-graph').style.width = `${width}px`
        this.updateGraph()
    },

    data () {
        return {
            loadingGraph: true,
            graph: null,
            energy: 0,
            powerDataSet: [],
            timeMap: {
                0: '12AM', 1: '1AM', 2: '2AM',
                3: '3AM', 4: '4AM', 5: '5AM',
                6: '6AM', 7: '7AM', 8: '8AM',
                9: '9AM', 10: '10AM', 11: '11AM',
                12: '12PM', 13: '1PM', 14: '2PM',
                15: '3PM', 16: '4PM', 17: '5PM',
                18: '6PM', 19: '7PM', 20: '8PM',
                21: '9PM', 22: '10PM', 23: '11PM',
            }
        }
    },

    computed: {
        dataset () {
            var dataset = []
            // for (var time = 0; time <= 23; time += 1) {
            for (var time = 0; time < this.powerDataSet.length; time += 1) {
                dataset.push({
                    power: this.powerDataSet[time].power || null,
                    time: new Date(this.powerDataSet[time].time) || null
                    // time
                })
            }
            return dataset
        },

        powerAggregate () {
            return this.powerDataSet.reduce((c, p) => {
                return c += parseFloat(p.power)
            }, parseFloat(this.powerDataSet[0].power))
        }
    },

    watch: {
        energy (energy) {
            this.$emit('energy', energy)
        }
    },

    methods: {
        setupPowerLiveFeed () {
            this.$channel.bind('power-update', (data) => {
                this.powerDataSet.push(data)
                this.energy += this.powerAggregate * 3600
                this.graph.setData(this.dataset)
            })
        },

        async getPower () {
            var power = await fetch(`${this.$API_URL}/power`).then(res => res.json())
            return power
        },

        updateGraph () {
            // let { timeMap } = this
            this.graph = new window.Morris.Line({
                element: 'line-graph',
                data: this.dataset,
                xkey: 'time',
                ykeys: [ 'power' ],
                labels: [ 'Power', 'Time' ], 
                smooth: true,
                hideHover: true,
                parseTime: false,
                xLabels: 'minute',
                // postUnits: 'kW',
                resize: true,
                // grid: false,
                lineColors: [ '#4b3685', '#FFF' ],
                continuousLine: false,
                xLabelFormat (x) {
                    let t = new Date(x.label)
                    let m = t.getHours() < 12 ? 'AM' : 'PM'
                    return `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}${m}`
                }
            })
            this.loadingGraph = false
        }
    }
}
</script>

<style lang="scss" scoped>
.line-graph-container {
}

#line-graph {
    width: 100%;
    min-height: 300px;
    background-color: #111;
    margin-bottom: 25px;
    border-radius: 14px;
    padding: 35px;
    position: relative;

    svg {
        width: 100%;
    }

    &:before {
        content: "Power (kW)";
        position: absolute;
        left: -15px;
        top: 45%;
        letter-spacing: 0.7px;
        transform: rotate(-90deg);
    }

    &:after {
        content: "Time";
        position: absolute;
        right: 35px;
        bottom: 15px;
        letter-spacing: 0.7px;
    }
}

h3 {
    margin-bottom: 10px;
}
</style>