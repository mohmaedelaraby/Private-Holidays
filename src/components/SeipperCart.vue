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
                         <div class="slider__images__item"  >
                            <img src="@/assets/1.png" alt="main" @click="PushImage(img1)" />
                         </div> 

                         <div class="slider__images__item"  >
                              <img src="@/assets/2.png" alt="main" @click="PushImage(img2)" >
                         </div> 

                         <div class="slider__images__item" >
                            <img src="@/assets/3.png" alt="main" @click="PushImage(img3)"/>
                         </div> 
                         
                     </div>
                </div>
            </div>
            <div class="cart__conatiner__info">
                <h3>Thalie 5</h3>
                <p>Thalie 5 is located on the exclusive Belle Riviere estate, which is home to several of Luxury Retreats’ finest villas in Mauritius.</p>
                 <div class="icons">

                    <span class="icons__item">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="16" viewBox="0 0 22 16">
                             <image id="bed" width="22" height="16" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcUlEQVQ4jdWTOUsEQRCFv9XV9UJdEVZEBMErGxTFhg6MBAMTf4CImYGBsYihgeH+DtlI8BeMDILBRN5nsCjKYuCBIioFNTIMrcyykQ+anumufv3qVXVmZnaelGjR+SW+aI3nDM7qPAqMAIPAMNAPFIBeoBVoS5x7Ap6Bsh+Ed8ANcAKcAcfWeEcR8aHjUlEWHZLvN13PqfpuFTPmOJvJxn5OgTXgArgCKmn8AbqAAR2bwFDcCkEZ2E5J9gNrvIqKOPCDcMVFHIeka4E+4BXYB651X5RNAk1ikx+Ee9Z470kCF3E7sKMFjPCpNjUDG+JhbO/cD8I5azwRcBsJiNqtE/jQaichhfpS5S4rnCmL4iVgAcjrEKJGnRsS8XL5g6qSAl/6QXivGUlLdmimu0K8CEz/4rVLSI+OqT/iCnUpCavG/yMWz0rAhBZAXl0tkMJJ0UtCXATGgUdgtVrWeLv5QbgOGGu8YvRAlrVXa8UWUA/wDW0zUkHLMW9tAAAAAElFTkSuQmCC"/>
                        </svg>
                    </span>

                     <span class="icons__item">
                         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="16" viewBox="0 0 24 16">
                             <image id="bath" width="24" height="16" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAABqUlEQVQ4jaXUz4tOURgH8M8wSJRYTby9ERHF3d66RBgxJSwtp5R/gK29qLFnYeytFDZK9OqNold+baT8bBYWojTI6EzPHbfbzHuH91u3e87pOd/veZ7zfc7Q6OETBsA6fC3y7OdCFEtq8224hzvYsAjdg2iXk063d6AesHTzlu3V+Xkcxyb8CKF+eI5j795PHWq3Rjrt1sibeuxwbf6iMn65iAzWp4NjaqGAusAE3mIrbjeQp3LORKancWG+oPolr8F97MRv3I0vrbewHCfxC1fwucizM/1OUc0gbb4e5MIA+1FErT9gbyLFY4xiuiHLWYFr2BU1Ty74jpWVmE/JDCG2Ktb24BW+dLq9fvxPk8AlXMSyWEy1Xxvj6aixuJv5sCKyr2IoxhPDke5rnMINjIU9x5rSb8DlIs+elI02Gf+jeIQdA5LPcZYCnYrvd2PjgOTJFA+qAsnPfe32jzhb5NmM2lt0E+Nhw/9F2jte5Nmtcn+9k6/iSFzys3jwkjVXR2zpjnS61Gzf4vsY/bOvyLPEMYe6QMK5cFUiaESRZ7MxnW7vYXT9X+APkQRcxU/3cF0AAAAASUVORK5CYII="/>
                        </svg>
                     </span>

                    
                     <span class="icons__item">
                         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="17" viewBox="0 0 16 17">
                             <image id="beachfront" width="16" height="17" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAABYElEQVQ4jY3TzUtVURQF8N97GoSKGkETQ6UXlGA0KFAcNUmzJgYKzqIMGpdNGjVr0B9QNMlGDhskQdRfkGiTmkUQDYpyIuqD1xfIlnPhcnofLbhc7j57r7P3XutWLl66qgP6UEc/TmG9nF5tUXsZr7CLTdxMRAN5Ynf2XcFj3MIf3MNH3MaTdL6E59iOgq7aybEywX3cxV8sYAoPMZqKA+M4hE/RYXmE4VQceIBz6bYcNWxhJR/hCwZxHp/xGg0cbkISBNOYzJcYrb/Fd5zFESyneCPl1Iv5MddKhQJRdDopciK1/QYj6fxMrkKOHiziBr6ld8j5LOX1diKYxy+slWJ7uJOMVe1EcB2r+JnFY+FXMNtuByHXhVK7OX7jRTuCuP093rVrsRVBxK8VZmmHZv/CEGZwHB9CKvxI3vgHQRBOC3nmMJG2WyDcWCDMs4GXeIqdguAovuJRev4Hxw4IsA/TYEGV9jJASgAAAABJRU5ErkJggg=="/>
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
    components:{//SwipperOne
    },data(){
        return{
            mainimage:require("@/assets/4.png"),
            img1:require("@/assets/3.png"),
            img2:require("@/assets/2.png"),
            img3:require("@/assets/1.png")
        }
    },
     watch: {
    // whenever question changes, this function will run
    mainimage(newValue){
        if(newValue===this.img1){alert("image1 is here")}
        else if(newValue===this.img2){alert("image2 is here")}
        else if(newValue===this.img3){alert("image3 is here")}
    }
  },
    methods:{
    PushImage(img) {
      this.mainimage = img;
    },
    changeQoute(){
        alert("HI")
    },
  
    }
}
</script>


<style lang="scss" scoped>
.cart{
    width: 35%;
    height: 35vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    @media  (max-width:770px) {
                      
                         width: 48%;
                     
                }
                 @media  (max-width:426px) {
                    width: 86%;
                }
    .cart__conatiner{
        width: 100%;
        height: 100%;  
        display: flex; 
        .swipper__contianer{
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .swipper__contianer__slider{
                width: 100%;
                height: 100%;
               
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .main__img{
                    flex: 3;
                    width: 100%;

                    position: relative;
                     img{
                     position: absolute;
                     height: 100%;
                     width: 100%;
                     
                 }
                  @media (max-width:780px) {
                         height: 130%;
                         width: 80%;
                     }
                     @media (max-width:426px) {
                         height: 130%;
                         width: 100%;
                     }

                }
                .slider__images{
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    .slider__images__item{
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      
                        cursor: pointer;
                        img{
                            width: 100%;
                            height: 100%;
                             
                        }
                    }

                    
                }
               
               
            }
        }
        .cart__conatiner__info{
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            h3{
                width: 100%;
                display: flex;
                justify-content: flex-start;
                color: black;
                margin-left: 18px;
                margin-top: 25px;
            }
            p{
                width: 90%;
                color: black;
                font-size: 14px;
            }
            .icons{
                width: 90%;
                display: flex;
                justify-content: flex-start;
    
                .icons__item{
                    margin-right: 35px;
                }

            }
            .btn__area{
                width: 100%;
                display: flex;
                justify-content: flex-start;
                   button{
                       margin-left: 15px;
                 padding: 12px;
                 width: 40%;
                  background-color: #f31131;
                 border-radius: 41px;
                  border: none;
                 color: white;
                 @media  (max-width:770px) {
                         margin-bottom: 21px;
                         width: 53%;
                     
                }
                 @media  (max-width:426px) {
                    
                }
                 }
            }
         

        }
    }
}
</style>