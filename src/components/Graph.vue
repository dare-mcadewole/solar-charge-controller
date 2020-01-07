<template>
    <section id="pt-chart"></section>
</template>

<script>
import MG from 'metrics-graphics'
export default {
    name: 'graph',
    mounted () {
        var width = window.innerWidth * 0.7
        MG.data_graphic({
            title: 'Power-Time Chart',
            // description: 'This graphics shows real-time Power Consumption',
            data: this.dataset, // an array of objects, such as [{value:100,date:...},...]
            width,
            height: 250,
            target: '#pt-chart', // the html element that the graphic is inserted in
            x_accessor: 'time',  // the key that accesses the x value
            y_accessor: 'power', // the key that accesses the y value
            area: true,
            x_label: 'Time',
            y_label: 'Power'
        })
    },
    data () {
        return {
            dataset: [
                {
                    power: 0,
                    time: 1
                },
                {
                    power: 3,
                    time: 2
                },
                {
                    power: 5,
                    time: 3
                },
                {
                    power: 20,
                    time: 4
                },
                {
                    power: 13,
                    time: 5
                },
                {
                    power: 20,
                    time: 6
                },
                {
                    power: 3,
                    time: 7
                },
                {
                    power: 0,
                    time: 8
                }
            ],
        }
    }
}
</script>

<style lang="scss">
#pt-chart {
    margin: auto;
}
.mg-chart-title {
    fill: #fff;
    font-family: 'Google Sans';
}
.mg-line1-color {
    stroke: #4040e8;
    stroke: #ff9f41;
}
path.mg-main-line {
    fill: none;
    opacity: 0.8;
    stroke-width: 2px;
}

.mg-area1-color {
    fill: rgba(0,0,0,0.2);
}

.mg-x-axis text, .mg-y-axis text {
    fill: #fff;
    font-size: 13px;
    font-weight: bold;
    opacity: 0.7;
}
text {
    fill: #FFF;
}
</style>