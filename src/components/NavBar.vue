<template>
<header :class="{'scrolled__nav':scrollPostion}">
    <nav>
        <div class="logo">
            <img src="@/assets/PrivateHolidays.png" alt="logo">
        </div>
        <ul v-if="!mobile" class="navigation">
        <li class="navigation__item">Home</li>
        <li class="navigation__item">Experience</li>
        <li class="navigation__item">Questions</li>
        <li class="navigation__item">Contacts</li>
        </ul>
        <div class="icon">
         <span @click="toggleNavBar()" v-if="mobile" class="icon-menu1" :class="{'icon__active':mobileNav}"></span>
        </div>

        <div class="mobile__nav">
        <ul v-if="mobileNav" class="dropdown__navigation">
        <li class="navigation__item">Home</li>
        <li class="navigation__item">Experience</li>
        <li class="navigation__item">Questions</li>
        <li class="navigation__item">Contacts</li>
        </ul>
        </div>
    </nav>
</header>
</template>

<script>
    export default {
         name: 'NavBar',
         data(){
             return{
                 scrollPostion:null,
                 mobile:null,
                 mobileNav:null,
                 windowwidth:null
             };
         },
         created(){
             window.addEventListener('resize', this.checkWidth)
             this.checkWidth()
         },
         methods:{
             toggleNavBar(){
                 console.log("==>",this.mobileNav)
                 this.mobileNav = !this.mobileNav;
             } ,
             checkWidth(){
                 this.windowwidth = window.innerWidth;
                 if(this.windowwidth<=750){
                     this.mobile=true
                     return;
                 }
                 this.mobile =false
                 this.mobileNav=false
                 return;
             }
         }

    }
</script>

<style lang="scss" scoped>
header{
    background-color: white;
    z-index: 99;
    width: 100%;
    transition: 0.5s ease all;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;

    nav{
        position: relative;
        display: flex;
        flex-direction: row;
        width: 90%;
        padding: 12px 0px ;
        margin: 0 auto;
        transition: 0.5s ease all;
        @media (min-width:1140px) {
            max-width: 1140px;
        }
        .navigation{
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }
        ul, .navigation__item{
            font-weight: 500;
            color: black;
            text-decoration: none;
            list-style: none;
        }

        li{
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
            
        }

        .navigation__item{
            font-size: 14px;
            transition: 0.5s ease all;
            border-bottom: 1px solid transparent;
            padding-bottom: 4px;

            &:hover{
                border-bottom: 1px solid gray;
                color: gray;
            }
        }

        .logo{
            display: flex;
            align-items: center;
            img{
                width: 100%;
                height: 50px;
                transition: 0.5s ease all;
                @media (max-width:426px) {
                    width: 90%;
                    height: 30px;
                }
            }
        }
        .icon{
            display: flex;
            align-items: center;
            position: absolute;
            top: 0px;
            right: 24px;
            height: 100%;
          
            .icon-menu1:before {
            content: "\e900";
            cursor: pointer;
            font-size: 24px;
             transition: 0.5s ease all;
            }
        }

        .icon__active{
            transform: rotate(180deg);
             transition: 0.5s ease all;
        }
        .dropdown__navigation{
           display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 100;
    width: 100%;
    max-width: 275px;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;

            li{
                margin-left: 0;
                .navigation__item{
                    color: white;
                }
            }
        }

        
    }
}
 

</style>