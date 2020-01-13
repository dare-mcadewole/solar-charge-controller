<template>
    <div class="sc-card column is-full-mobile">
        <div class="">
            <div class="image-value">
                <img :src="`/${icon}.png`" height="50px" />
                <div class="xheading is-size-4 has-text-" v-html="value">
                </div>
            </div>
            <div class="card-name has-text- is-uppercase xheading has-text-weight-bold">
                {{ name }}
            </div>
            <div class="is-size-7">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: [
        'icon', 'name', 'value', 'description'
    ]
}
</script>

<style lang="scss" scoped>
$border: 2px solid #7957D5;
$yellow: #ff9f41;
$cool-purple: #7957D5;
$dark-bg: #523b93;

.sc-card > div {
    border-radius: 4px;
    padding: 1.5em;
    // box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    // background-color: rgba(0,0,0,0.04);
    background-color: rgba(255, 255, 255, 0.93);
    background-color: #222;
    // transform: rotateZ(-1deg);
    color: #FFF;
}

.image-value {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-name {
    letter-spacing: 0.5px;
    margin-top: 1.2em;
    color: #ff9f41;
    font-size: 14px;
}

img {
    height: 55px !important;
    // margin-bottom: 1em;
    vertical-align: middle;
}
</style>