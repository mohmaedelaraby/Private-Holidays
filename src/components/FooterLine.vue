<template>
            <div class="footer__list" >
                <h6 class="footer__list__header">{{header}}</h6>
                <ul>
                    <li v-for="(item,index) in list" v-bind:key="index" class="footer__list__item">{{item}}</li>
                  
                </ul>
            </div>
</template>

<script>
export default {
     name: 'FooterLine',
     props:['fo', 'list']
}
</script>

<style lang="scss" scoped>

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

</style>