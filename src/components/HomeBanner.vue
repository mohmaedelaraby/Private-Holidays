<template>
    <div class="outer">
        <div class="inner">
            <img src="@/assets/banner.png" alt="banner" loading="lazy">
            <div class="inner__layout">
                <h1>ENJOY FREEDOM LAND</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.outer{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .inner{
        position: relative;
        width: 100%;
        height: 100%;
        
        img{
            position: absolute;
            width: 100%;
            height: 100%;
            filter: brightness(1);
        }
        .inner__layout{
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            h1{
                color: white;
                font-size: 50px;

                @media  (max-width:770px) {
                    font-size: 30px;
                }
                 @media  (max-width:376px) {
                    font-size: 20px;
                }
            }
        }
    }
}

</style>