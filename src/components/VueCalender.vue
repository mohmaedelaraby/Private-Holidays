<template>
  <div>
    <v-date-picker v-model="range" is-range>
      <template v-slot="{ inputValue, inputEvents }">
        <div class="flex justify-center items-center ">
          <span>
            <input :value="inputValue.start" v-on="inputEvents.start" @click="$emit('start', inputValue.start) " />
            <img src="@/assets/dropdown.png" alt="drop" />
          </span>
          <span>
            <input :value="inputValue.end" v-on="inputEvents.end" @click="$emit('end', inputValue.end)" />
             <img src="@/assets/dropdown.png" alt="drop" />
          </span>
        
        </div>
      </template>
    </v-date-picker>
  </div>
</template>

<script>

export default {
  data() {
    return {
      range: {
        start: new Date().toDateString(),
        end: new Date().toDateString()
      },
    };
  },
  emits: ['start', 'end']
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-evenly;
  span{
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid;
    width: 40%;
        @media (max-width: 769px) {
                
               font-size: 12px;
         }
       img{
         width: auto;
         height: 80%;
         @media (max-width: 769px) {
               width: 15%;
    height: 61%;
         }
       }
      
    input {
    color: gray;
    border: none;
    width: 62%;
    margin-left: 15px;
 
    @media (max-width:426px) {
      width: 60%;
    }
  }
  }

  
}
</style>