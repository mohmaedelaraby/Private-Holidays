<template>
  <div class="flex">
    <v-date-picker v-model="start"  >
      <template v-slot="{ start, inputEvents }">
        <div class="flex justify-center items-center ">
          <span>
            <input :value="start" v-on="inputEvents" :placeholder="placeholderStart" />
            <img src="@/assets/dropdown.png" alt="drop" />
          </span>
        
        </div>
      </template>
    </v-date-picker>

     <v-date-picker v-model="end"  >
      <template v-slot="{ end, inputEvents }">
        <div class="flex justify-center items-center ">
          <span>
            <input :value="end" v-on="inputEvents" :placeholder="placeholderEnd" />
            <img src="@/assets/dropdown.png" alt="drop" />
          </span>
        </div>
      </template>
    </v-date-picker>
    <div style="display: flex; align-items: center; justify-content: center; color: red; font-size: 10px;">
    {{currentStatus}}
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        start: new Date(),
        end: new Date() ,
        placeholderStart:" ",
        placeholderEnd:" ",
        currentStatus:" ", 
    };
  },
  emits: ['start', 'end'],
  watch: {
    start: function (date) {
      console.log("startDate",this.start);
      this.$emit("start", {
        start: date,
        end: this.end,
      });
    },
    end: function (date) {
      console.log("endDate",this.end);
      this.$emit("end", {
        start: this.start,
        end: date,
      });
    },
  },mounted(){
    this.placeholderStart=this.start.toString().slice(0,16);
    this.placeholderEnd=this.end.toString().slice(0,16);
  },
    updated(){
      if(this.start!==null&&this.end!==null &&this.start>this.end)
      {
        console.log("start is bigger than end")
        this.currentStatus="end date limit the start"
      }
      else{
        console.log("correct")
          this.placeholderStart=this.start.toString().slice(0,16);
    this.placeholderEnd=this.end.toString().slice(0,16);
        this.currentStatus=" "
      }
    }
  

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
    width: 83%;
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
         @media (max-width: 320px) {
               width: 10%;
    height: 61%;
         }
       }
      
    input {
    color: gray;
    border: none;
    width: 76%;
    margin-left: 15px;
 
    @media (max-width:426px) {
      width: 60%;
    }
  }
  }

  
}
</style>