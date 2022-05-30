<template>
    <div class="cart">
        <div class="cart__conatiner">
            <div class="swipper__contianer">
                <div class="swipper__contianer__slider">
                    <div class="main__img">
                        <img v-bind:src="mainimage" alt="main" />
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

                    <span class="icons__item">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22"
                            height="16" viewBox="0 0 22 16">
                            <image id="bed" width="22" height="16"
                                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcUlEQVQ4jdWTOUsEQRCFv9XV9UJdEVZEBMErGxTFhg6MBAMTf4CImYGBsYihgeH+DtlI8BeMDILBRN5nsCjKYuCBIioFNTIMrcyykQ+anumufv3qVXVmZnaelGjR+SW+aI3nDM7qPAqMAIPAMNAPFIBeoBVoS5x7Ap6Bsh+Ed8ANcAKcAcfWeEcR8aHjUlEWHZLvN13PqfpuFTPmOJvJxn5OgTXgArgCKmn8AbqAAR2bwFDcCkEZ2E5J9gNrvIqKOPCDcMVFHIeka4E+4BXYB651X5RNAk1ikx+Ee9Z470kCF3E7sKMFjPCpNjUDG+JhbO/cD8I5azwRcBsJiNqtE/jQaichhfpS5S4rnCmL4iVgAcjrEKJGnRsS8XL5g6qSAl/6QXivGUlLdmimu0K8CEz/4rVLSI+OqT/iCnUpCavG/yMWz0rAhBZAXl0tkMJJ0UtCXATGgUdgtVrWeLv5QbgOGGu8YvRAlrVXa8UWUA/wDW0zUkHLMW9tAAAAAElFTkSuQmCC" />
                        </svg>
                    </span>

                    <span class="icons__item">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24"
                            height="16" viewBox="0 0 24 16">
                            <image id="bath" width="24" height="16"
                                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAABqUlEQVQ4jaXUz4tOURgH8M8wSJRYTby9ERHF3d66RBgxJSwtp5R/gK29qLFnYeytFDZK9OqNold+baT8bBYWojTI6EzPHbfbzHuH91u3e87pOd/veZ7zfc7Q6OETBsA6fC3y7OdCFEtq8224hzvYsAjdg2iXk063d6AesHTzlu3V+Xkcxyb8CKF+eI5j795PHWq3Rjrt1sibeuxwbf6iMn65iAzWp4NjaqGAusAE3mIrbjeQp3LORKancWG+oPolr8F97MRv3I0vrbewHCfxC1fwucizM/1OUc0gbb4e5MIA+1FErT9gbyLFY4xiuiHLWYFr2BU1Ty74jpWVmE/JDCG2Ktb24BW+dLq9fvxPk8AlXMSyWEy1Xxvj6aixuJv5sCKyr2IoxhPDke5rnMINjIU9x5rSb8DlIs+elI02Gf+jeIQdA5LPcZYCnYrvd2PjgOTJFA+qAsnPfe32jzhb5NmM2lt0E+Nhw/9F2jte5Nmtcn+9k6/iSFzys3jwkjVXR2zpjnS61Gzf4vsY/bOvyLPEMYe6QMK5cFUiaESRZ7MxnW7vYXT9X+APkQRcxU/3cF0AAAAASUVORK5CYII=" />
                        </svg>
                    </span>


                    <span class="icons__item">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                            height="17" viewBox="0 0 16 17">
                            <image id="beachfront" width="16" height="17"
                                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAABYElEQVQ4jY3TzUtVURQF8N97GoSKGkETQ6UXlGA0KFAcNUmzJgYKzqIMGpdNGjVr0B9QNMlGDhskQdRfkGiTmkUQDYpyIuqD1xfIlnPhcnofLbhc7j57r7P3XutWLl66qgP6UEc/TmG9nF5tUXsZr7CLTdxMRAN5Ynf2XcFj3MIf3MNH3MaTdL6E59iOgq7aybEywX3cxV8sYAoPMZqKA+M4hE/RYXmE4VQceIBz6bYcNWxhJR/hCwZxHp/xGg0cbkISBNOYzJcYrb/Fd5zFESyneCPl1Iv5MddKhQJRdDopciK1/QYj6fxMrkKOHiziBr6ld8j5LOX1diKYxy+slWJ7uJOMVe1EcB2r+JnFY+FXMNtuByHXhVK7OX7jRTuCuP093rVrsRVBxK8VZmmHZv/CEGZwHB9CKvxI3vgHQRBOC3nmMJG2WyDcWCDMs4GXeIqdguAovuJRev4Hxw4IsA/TYEGV9jJASgAAAABJRU5ErkJggg==" />
                        </svg>
                    </span>


                    <span class="icons__item">
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

                    </span>
                </div>
                <div class="btn__area"><button>Book Now</button></div>
            </div>
        </div>
    </div>
</template>

<script>
//import SwipperOne from "./SwipperOne.vue";

export default {
    components: {//SwipperOne
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
    width: 35%;
    height: 35vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:770px) {

        width: 48%;

    }

    @media (max-width:426px) {
        width: 86%;
    }

    .cart__conatiner {
        width: 100%;
        height: 100%;
        display: flex;

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

                    .slider__images__item {
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        cursor: pointer;

                        img {
                            width: 100%;
                            height: 100%;

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
                width: 100%;
                display: flex;
                justify-content: flex-start;
                color: black;
                margin-left: 18px;
                margin-top: 25px;
            }

            p {
                width: 90%;
                color: black;
                font-size: 14px;
            }

            .icons {
                width: 90%;
                display: flex;
                justify-content: flex-start;

                .icons__item {
                    color: gray;
                    margin-right: 25px;
                }

            }

            .btn__area {
                width: 100%;
                display: flex;
                justify-content: flex-start;

                button {
                    margin-left: 15px;
                    padding: 12px;
                    width: 40%;
                    background-color: #f31131;
                    border-radius: 41px;
                    border: none;
                    color: white;

                    @media (max-width:770px) {
                        margin-bottom: 21px;
                        width: 53%;

                    }

                    @media (max-width:426px) {}
                }
            }


        }
    }
}
</style>