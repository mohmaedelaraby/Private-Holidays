<template>
    <div>
        <VcalnderVmulti/>
        <SwiperTwo/>
        <NestedSwipper/>
        <SwipperThree/>
    </div>
</template>

<script>
import VcalnderVmulti from './VcalnderVmulti.vue'
import SwiperTwo from './SwiperTwo.vue';
import SwipperThree from './SwipperThree.vue';
import NestedSwipper from './NestedSwipper.vue';
export default {
    setup() {
        return {};
    },
    components: { VcalnderVmulti, SwiperTwo, SwipperThree, NestedSwipper }
}
</script>

<style lang="scss" scoped>

</style>