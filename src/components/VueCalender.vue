<template>
  <div class="flex">
    <v-date-picker v-model="startD" :min-date='new Date()'  >
      <template v-slot="{ startD, inputEvents }">
        <div class="flex justify-center items-center ">
          <span>
            <input :value="startD" v-on="inputEvents" :placeholder="placeholderStart"     @click="submit"/>
            <img src="@/assets/dropdown.png" alt="drop" />
          </span>
        </div>
         <div v-if="v$.startD.$error" class="warn"> is embty.</div>
      </template>
         
    </v-date-picker>

     <v-date-picker v-model="end" :min-date='startD' >
      <template v-slot="{ end, inputEvents }">
        <div class="flex justify-center items-center ">
          <span>
            <input :value="end" v-on="inputEvents" :placeholder="placeholderEnd"    @click="submit" />
            <img src="@/assets/dropdown.png" alt="drop" />
          </span>
        </div>
         <div v-if="v$.end.$error" class="warn"> is embty.</div>
      </template>
    </v-date-picker>
    <div style="display: flex; align-items: center; justify-content: center; color: red; font-size: 8px;">
    {{currentStatus}}
    </div>
    <!-- <button @click="submit">click</button> -->
  </div>
</template>

<script>
 import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
      setup() {
        return { v$: useVuelidate() }
    }, 
  data() {
    return {
        startD: new Date(),
        end:  new Date().toString().slice(0,16),
        placeholderStart:" ",
        placeholderEnd:" ",
        currentStatus:" ", 
    };
  },  validations() {
        return {
          startD: {required},
        end: {required}
        }
    }, 
  emits: ['start', 'end'],
  watch: {
    start: function (date) {
     
      this.$emit("start", {
        startD: date,
        end: this.end,
      });
    },
    end: function (date) {
    
      this.$emit("end", {
        startD: this.startD,
        end: date,
      });
    },
  },mounted(){
    this.placeholderStart=this.startD.toString().slice(0,16);
    this.placeholderEnd=this.end.toString().slice(0,16);
  },
    updated(){
      if(this.startD!==null&&this.end!==null &&this.startD>this.end)
      {
        console.log("time limit")
        this.currentStatus=" "
      }
      else{
     
          this.placeholderStart=this.startD.toString().slice(0,16);
    this.placeholderEnd=this.end.toString().slice(0,16);
        this.currentStatus=" "
      }
    }
  , methods: {
        async submit() {

            const result = await this.v$.$validate()
            if (!this.v$.$error) {
                console.log("date valdation",result)
            
            }
            else{console.log("errrrrr")}
            // perform async actions

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