<template>
  <div class="x" style="width: 65%; height: fit-content;">
  
    <Multiselect
      v-model="value"
      :options="options"
      :placeholder="placeholder"
      :searchable="false"
      @click="$emit('result' , this.value )"
      class="xxxx"
    />
  </div>
</template>

<script>
  import Multiselect from '@vueform/multiselect'
  

  export default {
    components: {
      Multiselect,
    },
    props:['title' , 'list'],
    data() {
      return {
        
        value: "",
        options: this.list,
        placeholder:this.title
      }
    },
     emits:['result']
  }
</script>

<style src="@vueform/multiselect/themes/default.css">
.xxxx{
  background-color: red;
}

  .multiselect{
    font-size: 10px;
  }


.multiselect-dropdown{
  z-index: 10000;
}
.multiselect-caret{
  overflow: hidden;
}

</style>