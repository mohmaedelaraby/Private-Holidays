<template>
    <div class="VCVM">
        <div class="vcvm__form">
            <div class="vcvm__form__choice">
                <MulSelect :title="placeholder_one" :list="list1" @result="getPlace" />
            </div>
            <div class="vcvm__form__choice3">
                <VueCalender @start="getStart" @end="getEnd" />
            </div>
            <div class="vcvm__form__choice">
                <MulSelect :title="placeholder_two" :list="list2" @result="getNum" />
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
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
    setup() {
        return { v$: useVuelidate() }
    },
    components: { MulSelect, VueCalender },
    data() {
        return {
            placeholder_one: "Choose City",
            placeholder_two: "Number of Beds",
            list1: ['Popular destinations', 'Leh-Ladakh', 'Manali', 'Ooty', 'Allepey', 'Darjeeling', 'Goa', 'Mahabaleshwar'],
            list2: ['1 bedroom', '2 bedrooms', '3 bedrooms', '4 bedrooms', '5 bedrooms'],
            res: {
                v1: " ",
                v2: " ",
                v3: " ",
                v4: " "
            }
        }
    }, validations() {
        return {
            res: { required }
        }
    },
    methods: {
        getPlace(name) {
            this.res.v1 = name;
        },
        getNum(name) {
            this.res.v2 = name;
        },
        getStart(name) {
            this.res.v3 = name;
        },
        getEnd(name) {
            this.res.v4 = name;
        },
        async showvalues(e) {
            e.preventDefault();
            console.log("place", this.res.v1);
            console.log("number of beds", this.res.v2);
            console.log("start Date", this.res.v3);
            console.log("End Date", this.res.v4);
            const result = await this.v$.$validate()
            if (!this.v$.$error) {
                console.log("Done sending==>", result)
            }
            else {
                console.log("error in sending form")
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.VCVM {
    width: 100%;
    background-color: #ecf0f1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:320px) {
        height: 27vh;
    }

    .vcvm__form {
        top: 72%;
        left: 50;
        position: absolute;
        width: 85%;
        height: 22%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;


        @media (max-width:770px) {
         top: 73%;
    width: 93%;
    height: 17%;
        }

        @media (max-width:426px) {
            top: 51%;
            width: 95%;
            height: 13%;
        }

        @media (max-width:320px) {
           top: 21%;
    width: 95%;
    height: 35%;
    flex-direction: column;
        }

        .vcvm__form__choice {
            flex: 2;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width:320px) {
                width: 100%;
                margin-top: 15px;
                margin-bottom: 10px;
            }

        }

        .vcvm__form__choice3 {
            flex: 3;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .vcvm__form__choice2 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width:320px) {
                width: 100%;
                margin-bottom: 10px;
            }

            button {
                padding: 12px;
                width: 60%;
                background-color: #f31131;
                border-radius: 41px;
                border: none;
                color: white;
                cursor: pointer;
                 transition: 0.3s ease-in-out ;
                    &:hover{
                        background-color: #a40e22;
                        transition: 0.3s ease-in-out ;
                    }

                @media (max-width:780px) {
                    width: 100%;
                    margin-right: 20px;
                    padding: 10px;
                    font-size: 14px;
                    cursor: pointer;
                }

                @media (max-width:320px) {
                    font-size: 12px;
                    padding: 9px;
                    width: 25%;
                }
            }

        }
    }
}
</style>