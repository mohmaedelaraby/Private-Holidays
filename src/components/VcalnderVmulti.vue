<template>
    <div class="VCVM">
        <div class="vcvm__form">
             <div class="vcvm__form__choice">
                 <MulSelect 
                 :title="placeholder_one"
                 :list="list1"
                 @result="getPlace"/></div>
             <div class="vcvm__form__choice">
                 <VueCalender
                 @start="getStart"
                 @end="getEnd"/>
                 </div>
             <div class="vcvm__form__choice">
                 <MulSelect
                 :title="placeholder_two"
                 :list="list2" 
                 @result="getNum"/>
            </div>
            <div class="vcvm__form__choice2">
               <button @click="showvalues">Show</button>
            </div>
        </div>
    </div>
</template>

<script>
import MulSelect from './MulSelect.vue';
import VueCalender from './VueCalender.vue';


  export default {
    components: { MulSelect, VueCalender },
    data(){
        return{
            placeholder_one: "Choose City",
            placeholder_two: "Number of Beds",
            list1: ['Popular destinations','Leh-Ladakh','Manali','Ooty','Allepey','Darjeeling','Goa','Mahabaleshwar'],
            list2: ['1 bedroom','2 bedrooms','3 bedrooms','4 bedrooms','5 bedrooms'], 
            res:{
                v1:" ",
                v2:" ",
                v3:" ",
                v4:" "
            }
        }
    }, 
    methods: {
    getPlace(name) {
      this.res.v1 = name;
   },
    getNum(name) {
      this.res.v2 = name;
   },
   getStart(name){
       this.res.v3=name;
   },
   getEnd(name){
       this.res.v4=name;
   },
   showvalues(){
       console.log("place" , this.res.v1);
       console.log("number of beds" , this.res.v2);
       console.log("start Date" , this.res.v3);
       console.log("End Date" , this.res.v4);
   }
 }
   
}
</script>

<style lang="scss" scoped>
.VCVM{
    width: 100%;
    height: 10vh;
    background-color: #ecf0f1;
    display: flex;
    align-items: center;
    justify-content: center;
    .vcvm__form{
            top: 100%;
    left: 50;
    position: absolute;
    width: 85%;
    height: 20%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
        .vcvm__form__choice
        {
            flex: 3;
            display: flex;
            align-items: center;
            justify-content: center;
           
        }
        .vcvm__form__choice2{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                    padding: 12px;
                   width: 60%;
                     background-color: #f31131;
                     border-radius: 41px;
                  border: none;
                     color: white;
            }
           
        }
    }
}

</style>