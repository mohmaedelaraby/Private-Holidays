<template>
    <section>
      <VcalnderVmulti></VcalnderVmulti>
      <SwiperTwo/>
      <NestedSwipper/>
      <SwipperThree/>
    </section>
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
