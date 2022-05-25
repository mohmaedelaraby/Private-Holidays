<template>
    <div class="footer">
        <div class="footer__container">

            <div class="footer__list" >
                <h6 class="footer__list__header">Information</h6>
                <ul>
                    <li class="footer__list__item">About us</li>
                    <li class="footer__list__item">Online enquiry</li>
                    <li class="footer__list__item">Call us</li>
                    <li class="footer__list__item">General enquiries</li>
                    <li class="footer__list__item">Booking conditions</li>
                    <li class="footer__list__item">Privacy policy</li>
                    <li class="footer__list__item">Refund  policy</li>
                </ul>
            </div>

            <div class="footer__list" >
                <h6 class="footer__list__header">Experiences</h6>
                <ul>
                    <li class="footer__list__item">Beach </li>
                    <li class="footer__list__item">Adventure </li>
                    <li class="footer__list__item">Wildlife</li>
                    <li class="footer__list__item">Honeymoon</li>
                    <li class="footer__list__item">Culture & heritage</li>
                    <li class="footer__list__item">Nature</li>
                    <li class="footer__list__item">Spiritual</li>
                     <li class="footer__list__item">Hill station</li>
                </ul>
            </div>

            <div class="footer__list" >
                <h6 class="footer__list__header">Themes</h6>
                <ul>
                    <li class="footer__list__item">Party</li>
                    <li class="footer__list__item">Wedding</li>
                    <li class="footer__list__item">Group tours</li>
                </ul>
            </div>


            <div class="footer__list" >
                <h6 class="footer__list__header">Popular destinations</h6>
                <ul>
                    <li class="footer__list__item">Leh-Ladakh</li>
                    <li class="footer__list__item">Manali</li>
                    <li class="footer__list__item">Ooty</li>
                    <li class="footer__list__item">Allepey</li>
                    <li class="footer__list__item">Darjeeling</li>
                    <li class="footer__list__item">Goa</li>
                    <li class="footer__list__item">Mahabaleshwar</li>
                    <li class="footer__list__item">Agra</li>
                </ul>
            </div>


            
            <div class="footer__list" >
                <h6 class="footer__list__header" style="color: black;"> .</h6>
                 <ul>
                    <li class="footer__list__item">Coorg</li>
                    <li class="footer__list__item">Mysore</li>
                    <li class="footer__list__item">Gir</li>
                    <li class="footer__list__item">Kabini</li>
                    <li class="footer__list__item">Jaipur</li>
                    <li class="footer__list__item">Kodaikanal</li>
                    <li class="footer__list__item">Shimla</li>
                </ul>
            </div>


            <div class="footer__info">
                <div class="footer__info__upper">
                   <div>Phone : <a href="Tel: +91-80-41127931" rel="noreffere noopener" target="_blank"> +91-80-41127931</a></div>
                   <div>Email : <a href="mailto: info@aztechdesign.co" rel="noreffere noopener" target="_blank"> info@aztechdesign.co</a></div>
                </div>

                <div class="footer__info__lower">
                      <p class="footer__info__lower__Header"> Address </p>
                         <p  class="footer__info__lower__txt"> 1st Main, Bucharest</p>
                          <p  class="footer__info__lower__txt">2nd Stage Raiffisen Tower,</p>
                          <p  class="footer__info__lower__txt">Bucharest - 400400,</p>
                          <p  class="footer__info__lower__txt">Romania</p>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer{
    width: 100%;
    height: 40vh;
background-color: #171d1c;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer__container{
        overflow-y: hidden;
        width: 95%;
        height: 95%;
        
        color: white;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .footer__list{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 45px;
            height: 100%;
            .footer__list__header{
                font-size: 16px;
                color: white;
                 padding-bottom: 8px;
            }
            ul{
            list-style: none;
            .footer__list__item{
                font-size: 14px;
                color: white;
                padding-top: 8px;
            }

            .footer__list__exception{
                display: flex;
                flex-direction: row;
            }

            }
        }

         .footer__info{
             flex: 3;
                height: 95%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;

                .footer__info__upper{
                    display: flex;
                    flex-direction: column;
                    div{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;

                        a{
                            text-decoration: none;
                            cursor: pointer;
                            font-size: 14;
                            color: white;
                        }
                    }
                }

                .footer__info__lower{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    .footer__info__lower__Header{
                        font-size: 16px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;

                    }
                    .footer__info__lower__txt{
                         font-size: 14px;
                        color: white;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        white-space: pre;

                    }

                }

            } 
    }
} 

</style>