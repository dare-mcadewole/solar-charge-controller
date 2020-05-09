<template>
    <div>
        <div id="line-graph">
        </div>
    </div>
</template>

<script>
export default {
    async mounted () {
        this.setupPowerLiveFeed()
        this.powerDataSet = await this.getPower()
        var width = window.innerWidth * 0.9
        document.querySelector('#line-graph').style.width = `${width}px`
        this.updateGraph()
    },

    data () {
        return {
            loadingGraph: true,
            graph: null,
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
            for (var time = 0; time <= 23; time += 1) {
                dataset.push({
                    power: this.powerDataSet[time] || null,
                    time
                })
            }
            return dataset
        }
    },

    methods: {
        setupPowerLiveFeed () {
            this.$channel.bind('power-update', (data) => {
                this.powerDataSet.push(data.power)
                this.graph.setData(this.dataset)
            })
        },

        async getPower () {
            var power = await fetch(`${this.$API_URL}/power`).then(res => res.json())
            return power
        },

        updateGraph () {
            let { timeMap } = this
            this.graph = new window.Morris.Line({
                element: 'line-graph',
                data: this.dataset,
                xkey: 'time',
                ykeys: [ 'power' ],
                labels: [ 'Power', 'Time' ], 
                smooth: false,
                hideHover: true,
                parseTime: false,
                xLabels: 'hour',
                // postUnits: 'kW',
                // resize: true,
                // grid: false,
                lineColors: [ '#4b3685', '#FFF' ],
                continuousLine: false,
                xLabelFormat (x) {
                    let hour = x.x
                    return timeMap[hour]
                }
            })
            this.loadingGraph = false
        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>