<template>
    <div class="sc-card column is-full-mobile">
        <div class="columns">
            <div class="image-value">
                <img :src="`/${icon}.png`" height="50px" />
            </div>
            <div class="">
                <h1 class="card-name xheading">
                    {{ name }}
                </h1>
                <div class="xheading is-size-4 is-capitalized" v-html="value">
                </div>
            </div>
            <!-- <div class="is-size-7">
                {{ description }}
            </div> -->
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
    border-radius: 14px;
    padding: 1.5em;
    margin: .13rem;
    box-shadow: 0 1px 15px rgba(36, 26, 26, 0.13);
    // background-color: rgba(0,0,0,0.04);
    // background-color: rgba(255, 255, 255, 0.93);
    background-color: darken($dark-bg, 3);
    // transform: rotateZ(-1deg);
    color: #FFF;
}

.image-value {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem !important;
}

.xheading {
    margin: 0;
}

.card-name {
    letter-spacing: 0.5px;
    margin-bottom: 0;
    color: #ff9f41;
    font-size: 20px;
}

img {
    height: 55px !important;
    // margin-bottom: 1em;
    vertical-align: middle;
}
</style>