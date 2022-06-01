<template>
    <div class="cart">
        <div class="cart__conatiner">
            <div class="swipper__contianer">
                <div class="swipper__contianer__slider">
                    <div class="main__img">
                        <img v-bind:src="mainimage" alt="main" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="222" ref="main" />
                    </div>
                    <div class="slider__images">
                        <!-- There is 2 bugs in change image , first the quilty of image and 
                        second the cursor only work in the bottom of image -->
                        <div class="slider__images__item">
                            <img src="@/assets/1.png" alt="main" @click="PushImage(img1)" />
                        </div>

                        <div class="slider__images__item">
                            <img src="@/assets/2.png" alt="main" @click="PushImage(img2)">
                        </div>

                        <div class="slider__images__item">
                            <img src="@/assets/3.png" alt="main" @click="PushImage(img3)" />
                        </div>

                    </div>
                </div>
            </div>
            <div class="cart__conatiner__info">
                <h3>Thalie 5</h3>
                <p>Thalie 5 is located on the exclusive Belle Riviere estate, which is home to several of Luxury
                    Retreats’ finest villas in Mauritius.</p>
                <div class="icons">

                    <div class="icons__item" data-bs-toggle="tooltip" data-bs-placement="top" title="bedroom" ref="bed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g id="bed" transform="translate(-410 -2050)">
                                <g id="bed-2" data-name="bed" transform="translate(408.578 2041.499)">
                                    <path id="Path_73" data-name="Path 73"
                                        d="M25.074,21.372a.725.725,0,0,0-.787-.3,14.312,14.312,0,0,1-3.76.485,12.416,12.416,0,0,1-3.532-.487,21.9,21.9,0,0,0-5.855-.6,81.386,81.386,0,0,0-8.85.577c-.491.062-.868.69-.868,1.442v6.391c0,.8.423,1.448.948,1.448h.119L2.844,32.5h.948l.355-2.172h18.63l.355,2.172h.948l.355-2.172h.041c.523,0,.946-.649.946-1.448V22.488A1.831,1.831,0,0,0,25.074,21.372Zm-4.832-2.819H13.821c0-1.156,1.437-2.091,3.211-2.091S20.242,17.4,20.242,18.553Zm-7.267,0H6.553c0-1.156,1.437-2.091,3.211-2.091S12.975,17.4,12.975,18.553ZM4.184,12.625A43.318,43.318,0,0,1,13.421,11.4a43.347,43.347,0,0,1,9.237,1.23v5.945h1.894V10.184l-.782-.214A45.3,45.3,0,0,0,13.42,8.5,45.3,45.3,0,0,0,3.07,9.97l-.78.214v8.687H4.184Z" />
                                </g>
                                <path id="Color_Overlay" data-name="Color Overlay"
                                    d="M431.71,2074l-.355-2.172h-18.63l-.355,2.172h-.948l-.355-2.172h-.119c-.525,0-.948-.649-.948-1.447v-6.392c0-.751.377-1.38.868-1.441a81.143,81.143,0,0,1,8.85-.577,21.921,21.921,0,0,1,5.854.6,12.406,12.406,0,0,0,3.533.488,14.3,14.3,0,0,0,3.76-.485.723.723,0,0,1,.788.3,1.832,1.832,0,0,1,.347,1.117v6.394c0,.8-.423,1.447-.946,1.447h-.041l-.355,2.172Zm-20.842-13.63v-8.688l.78-.213a37.2,37.2,0,0,1,20.7,0l.781.213v8.389h-1.895v-5.946a35.328,35.328,0,0,0-18.473,0v6.247Zm11.531-.319c0-1.156,1.437-2.091,3.212-2.091s3.209.935,3.209,2.091Zm-7.268,0c0-1.156,1.437-2.091,3.211-2.091s3.212.935,3.212,2.091Z"
                                    fill="#454851" />
                            </g>
                        </svg>

                    </div>

                    <div class="icons__item" data-bs-toggle="tooltip" data-bs-placement="top" title="bath" ref="bath">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path id="Color_Overlay" data-name="Color Overlay"
                                d="M490.993,2074l-.437-1.763a38.127,38.127,0,0,1-13.12,0L477,2074h-.8l.331-2.053c-1.545-.855-2.216-3.411-2.563-5-.284-1.3-.743-3.373-.982-4.45.373.008.757.022,1.154.031a1.738,1.738,0,0,0,.2.451l2.573,3.554.868-1.557-1.293-2.391c.4.008.819.014,1.237.021,1,.011,2.035.023,3.086.033s2.119.009,3.186.015,2.137-.008,3.187-.015,2.085-.025,3.086-.035c1.7-.021,3.307-.074,4.734-.109-.238,1.076-.7,3.153-.983,4.451-.346,1.586-1.017,4.142-2.562,5l.331,2.053Zm-16.533-11.228a1.732,1.732,0,0,1-.045-1.582l2.094-4.032.005.008c.025-.044.045-.094.074-.136a1.118,1.118,0,0,1,.9-.584.912.912,0,0,1,.538.187l.014.012,2.359,1.314,3.4-.578.184,1.72.5-.412c.345-.288.76-.147,1.012.339l.855,1.647h8.3c1.535,0,1.336,1.578,1.336,1.578H476.309l-.22-.407,1.15-2.637-1.374,2.658,1.681,3.111-.647,1.16Zm5.914-2.1h1.72l1.8-1.5-3.412,1.066a.4.4,0,0,1-.086.017h-.012c-.017,0-.034,0-.052,0l-1.629-2.685Zm-8.366,1.578s-.2-1.578,1.336-1.578h1.035l-.109.348a2.17,2.17,0,0,0-.177,1.229Zm14.308-4.7c0-.718.32-1.076.641-1.076s.641.358.641,1.076-.32,1.074-.641,1.074S486.317,2058.271,486.317,2057.555Zm2.506-1.519c0-.446.2-.668.4-.668s.4.222.4.668-.2.669-.4.669S488.822,2056.482,488.822,2056.036Zm-13.1-1.117a4.045,4.045,0,0,1,.219-3.782,1.284,1.284,0,0,1,1.016-.612,1.48,1.48,0,0,1,1.236.979,4.04,4.04,0,0,1-.218,3.778,1.287,1.287,0,0,1-1.018.615A1.479,1.479,0,0,1,475.724,2054.919Zm12.02.139c0-.291.13-.436.26-.436s.26.145.26.436-.13.437-.26.437S487.743,2055.349,487.743,2055.057Zm.79-2.06c0-.576.257-.863.515-.863s.515.287.515.863-.257.864-.515.864S488.534,2053.573,488.534,2053Zm2.668-2.007c0-.291.13-.437.26-.437s.26.146.26.437-.13.438-.26.438S491.2,2051.282,491.2,2050.99Zm-3.752-.321c0-.446.2-.669.4-.669s.4.222.4.669-.2.667-.4.667S487.449,2051.114,487.449,2050.669Z"
                                transform="translate(-472 -2050)" fill="#454851" />
                        </svg>

                    </div>


                    <div class="icons__item" data-bs-toggle="tooltip" data-bs-placement="top" title="beach" ref="beach">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                            <g id="beachfront" transform="translate(-537 -2054)">
                                <g id="beachfront-2" data-name="beachfront" transform="translate(536.285 2053.31)">
                                    <path id="Path_95" data-name="Path 95"
                                        d="M9.605,16.15H7.75l3.438-8.819a11.7,11.7,0,0,1,2.745,1.555c1.248-2.639,1.054-5.367-.758-7.017C8.917,2.5,7.43,4.394,6.523,6.223A11.716,11.716,0,0,1,10,6.886L6.346,16.116H6.164c-.939,0-5.448.666-5.448,1.574h14.45c0-.908-4.622-1.54-5.56-1.54" />
                                    <path id="Path_96" data-name="Path 96"
                                        d="M14.881,2.937a8.548,8.548,0,0,1,0,6.743,5.008,5.008,0,0,1,1.765,1.1,6.572,6.572,0,0,1,.785.817,7.318,7.318,0,0,0,.284-2.173,8.2,8.2,0,0,0-2.834-6.487" />
                                    <path id="Path_97" data-name="Path 97"
                                        d="M5.593,5.77a8.929,8.929,0,0,1,5.855-4.541,7.408,7.408,0,0,0-1.6-.173,7.006,7.006,0,0,0-6.8,4.279,7.025,7.025,0,0,1,2.541.436" />
                                    <path id="Path_98" data-name="Path 98"
                                        d="M12.6,1.21c.238,0,.43-.116.43-.26S12.841.69,12.6.69s-.43.116-.43.26.192.26.43.26" />
                                </g>
                                <path id="Color_Overlay" data-name="Color Overlay"
                                    d="M537,2071c0-.908,4.509-1.574,5.449-1.574h.182l3.654-9.23a11.714,11.714,0,0,0-3.477-.663c.906-1.83,2.394-3.723,6.652-4.354,1.812,1.65,2.006,4.377.758,7.017a11.685,11.685,0,0,0-2.745-1.555l-3.438,8.818h1.855c.939,0,5.559.633,5.56,1.541Zm15.931-6.909a5.016,5.016,0,0,0-1.765-1.1,8.552,8.552,0,0,0,0-6.743,8.2,8.2,0,0,1,2.834,6.486,7.31,7.31,0,0,1-.284,2.174A6.577,6.577,0,0,0,552.931,2064.091Zm-13.594-5.448a7.006,7.006,0,0,1,6.8-4.279,7.414,7.414,0,0,1,1.6.174,8.929,8.929,0,0,0-5.854,4.541A7.035,7.035,0,0,0,539.337,2058.643Zm9.121-4.383c0-.144.193-.26.431-.26s.43.116.43.26-.193.26-.43.26S548.457,2054.4,548.457,2054.26Z"
                                    fill="#454851" />
                            </g>
                        </svg>

                    </div>

                    <div class="icons__item" data-bs-toggle="tooltip" data-bs-placement="right" title="Pool" ref="pool">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                            <g id="pool" transform="translate(-574 -2054)">
                                <g id="pool-2" data-name="pool" transform="translate(573.998 2052.786)">
                                    <path id="Path_103" data-name="Path 103"
                                        d="M17,16.325a2.238,2.238,0,0,1-.945.27c-.708,0-1.18-.539-1.889-.539s-1.18.539-1.889.539-1.18-.539-1.889-.539S9.21,16.6,8.5,16.6s-1.18-.539-1.889-.539-1.18.539-1.889.539-1.18-.539-1.889-.539S1.655,16.6.947,16.6A2.236,2.236,0,0,1,0,16.326v1.619a2.218,2.218,0,0,0,.943.269c.708,0,1.18-.539,1.889-.539s1.18.539,1.889.539,1.18-.539,1.889-.539,1.18.539,1.889.539,1.18-.539,1.889-.539,1.18.539,1.889.539,1.18-.539,1.889-.539,1.18.539,1.889.539a2.226,2.226,0,0,0,.945-.27V16.325Z" />
                                    <path id="Path_104" data-name="Path 104"
                                        d="M17,13.087a2.238,2.238,0,0,1-.945.27c-.708,0-1.18-.539-1.889-.539s-1.18.539-1.889.539-1.18-.539-1.889-.539-1.18.539-1.889.539-1.18-.539-1.889-.539-1.18.539-1.889.539-1.18-.539-1.889-.539-1.18.539-1.889.539A2.236,2.236,0,0,1,0,13.088v1.619a2.233,2.233,0,0,0,.945.269c.708,0,1.18-.539,1.889-.539s1.18.539,1.889.539,1.18-.539,1.889-.539,1.18.539,1.889.539,1.18-.539,1.889-.539,1.18.539,1.889.539,1.18-.539,1.889-.539,1.18.539,1.889.539a2.226,2.226,0,0,0,.945-.27Z" />
                                    <path id="Path_105" data-name="Path 105"
                                        d="M2.834,7.961H7.556V9.58H2.834Zm0,3.777V11.2H7.556v.81a2.235,2.235,0,0,0,.945.27,1.527,1.527,0,0,0,.472-.079V6.611a3.569,3.569,0,0,1,3.306-3.777,3.569,3.569,0,0,1,3.306,3.777.715.715,0,1,0,1.418,0c0-2.976-2.119-5.4-4.722-5.4-2.525,0-4.587,2.277-4.711,5.127H2.846A3.529,3.529,0,0,1,6.14,2.834,2.955,2.955,0,0,1,7.7,3.285a6.169,6.169,0,0,1,.924-1.257,4.27,4.27,0,0,0-2.483-.813c-2.6,0-4.722,2.42-4.722,5.4V12.2A4.588,4.588,0,0,1,2.834,11.738Z" />
                                </g>
                                <path id="Color_Overlay" data-name="Color Overlay"
                                    d="M588.164,2070.461c-.708,0-1.18.539-1.888.539s-1.181-.539-1.889-.539-1.18.539-1.889.539-1.18-.539-1.888-.539-1.181.539-1.889.539-1.18-.539-1.889-.539-1.18.539-1.888.539a2.214,2.214,0,0,1-.943-.269v-1.619a2.229,2.229,0,0,0,.945.269c.708,0,1.18-.539,1.888-.539s1.181.539,1.889.539,1.181-.539,1.889-.539,1.18.539,1.888.539,1.181-.539,1.889-.539,1.181.539,1.889.539,1.18-.539,1.888-.539,1.181.539,1.889.539a2.225,2.225,0,0,0,.943-.269v1.618a2.22,2.22,0,0,1-.945.27C589.345,2071,588.874,2070.461,588.164,2070.461Zm2.834-1.35h0Zm-2.832-1.888c-.708,0-1.18.539-1.888.539s-1.181-.539-1.889-.539-1.18.539-1.889.539-1.18-.539-1.888-.539-1.181.539-1.889.539-1.18-.539-1.889-.539-1.18.539-1.888.539a2.229,2.229,0,0,1-.945-.269v-1.619a2.229,2.229,0,0,0,.945.269c.708,0,1.18-.539,1.888-.539s1.181.539,1.889.539,1.181-.539,1.889-.539,1.18.539,1.888.539,1.181-.539,1.889-.539,1.181.539,1.889.539,1.18-.539,1.888-.539,1.181.539,1.889.539a2.23,2.23,0,0,0,.945-.27v1.619a2.22,2.22,0,0,1-.945.27C589.347,2067.762,588.875,2067.223,588.166,2067.223Zm-6.611-2.428v-.81h-4.723v.539a4.6,4.6,0,0,0-1.417.462V2059.4c0-2.976,2.119-5.4,4.722-5.4a4.271,4.271,0,0,1,2.483.814,6.179,6.179,0,0,0-.923,1.257,2.952,2.952,0,0,0-1.559-.452,3.529,3.529,0,0,0-3.294,3.508h4.722c.124-2.85,2.187-5.127,4.711-5.127,2.6,0,4.722,2.421,4.722,5.4a.715.715,0,1,1-1.417,0,3.335,3.335,0,1,0-6.611,0v5.588a1.524,1.524,0,0,1-.473.079A2.24,2.24,0,0,1,581.555,2064.794Zm-4.723-2.429h4.723v-1.619h-4.723Z"
                                    fill="#454851" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="btn__area"><button>Book Now</button></div>
            </div>
        </div>
    </div>
</template>

<script>
//import SwipperOne from "./SwipperOne.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";


export default {
    components: {//SwipperOne
    }, mounted() {
        new Tooltip(this.$refs.bed)
        new Tooltip(this.$refs.bath)
        new Tooltip(this.$refs.beach)
        new Tooltip(this.$refs.pool)

    }, data() {
        return {
            mainimage: require("@/assets/1.png"),
            img1: require("@/assets/1.png"),
            img2: require("@/assets/2.png"),
            img3: require("@/assets/3.png")
        }
    },
    methods: {
        // to replace the main image with another one 
        PushImage(img) {
            this.mainimage = img;
        },

    }
}
</script>


<style lang="scss" scoped>
.cart {
    margin-top: 50px;
    width: 90%;
    height: 26vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:770px) {
    width: 82%;
    height: 52vh;
    }

    @media (max-width:426px) {
          width: 89%;
    height: 92vh;
    }

    .cart__conatiner {
        width: 100%;
        height: 100%;
        display: flex;

        @media (max-width:426px) {
            flex-direction: column;
        }

        .swipper__contianer {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .swipper__contianer__slider {
                width: 100%;
                height: 100%;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .main__img {
                    flex: 3;
                    width: 100%;

                    position: relative;

                    img {
                        position: absolute;
                        height: 100%;
                        width: 100%;


                    }

                    @media (max-width:780px) {

                        width: 100%;
                    }

                    @media (max-width:426px) {
                        height: 130%;
                        width: 100%;
                    }

                }

                .slider__images {
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;

                    .slider__images__item {
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        height: 100%;
                        position: relative;

                        img {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            cursor: pointer;
                        }
                    }


                }


            }
        }

        .cart__conatiner__info {
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;


            h3 {
                width: 80%;
                display: flex;
                justify-content: flex-start;
                color: black;

                margin-top: 25px;
            }

            p {
                width: 80%;
                color: black;
                font-size: 20px;
            }

            .icons {
                width: 80%;
                display: flex;
                justify-content: flex-start;

                .icons__item {
                    color: gray;
                    margin-right: 25px;

                    svg {
                        width: 36px;
                        height: 26px;
                    }
                }

            }

            .btn__area {
                width: 100%;
                display: flex;
                justify-content: flex-start;

                button {
                    margin-left: 25px;
                    padding: 10px;
                    margin-top: 12px;
                    margin-bottom: 12px;
                    width: 50%;
                    background-color: #f31131;
                    border-radius: 41px;
                    border: none;
                    color: white;
                    cursor: pointer;
                     transition: 0.3s ease-in-out ;
                    &:hover{
                        color: #a40e22;
                        transition: 0.3s ease-in-out ;
                    }

                    @media (max-width:770px) {
                        margin-bottom: 21px;
                        width: 53%;

                    }

                    @media (max-width:426px) {
                        padding: 6px;
                        margin-top: 15px;
                    }
                }
            }


        }
    }
}
</style>