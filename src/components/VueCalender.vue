<template>
<v-date-picker v-model="range" is-range>
  <template v-slot="{ inputValue, inputEvents }">
    <div class="flex justify-center items-center">
      <input
        :value="inputValue.start"
        v-on="inputEvents.start"
        class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
        @click="$emit('start' , inputValue.start)"
      />
      <input
        :value="inputValue.end"
        v-on="inputEvents.end"
        class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
        @click="$emit('end' , inputValue.end )"
      />
    </div>
  </template>
</v-date-picker>
</template>

<script>

export default {
  data() {
    return {
      range: {
        start: new Date(2020, 9, 12),
        end: new Date(2020, 9, 16),
      },
    };
  },
     emits:['start','end']
};
</script>

<style lang="scss" scoped>
input{
  background-color: white;
  color: gray;
  border: none;
  border-bottom: 1px solid gray;
  margin-left: 15px;
   @media  (max-width:426px) {
                     width: 60%;
                }
}

</style>