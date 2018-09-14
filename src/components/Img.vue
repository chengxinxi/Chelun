<template>
    <div>
        <div class="tit">
            <p data-hover="hover" class="color" @click="colorClick"><span>颜色</span></p>
            <p class="second_p"><span><em>车款</em></span></p>
        </div>
        <ul  class="pic">
            <li  v-for="(item, index) in Picturelist" :key="index">
                <p class="title">
                    <span>{{item.Name}}</span>
                    <span>{{item.Count}}张</span>

                </p>
                
                <div class="ImgBox" v-for="(items , ind) in item.List" :key="ind">
                    <img :src="items.Url.replace(`{0}` , items.LowSize)"  />
                </div>
            </li>
        </ul>
    </div>
</template> 
<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        computed : {
            ...mapState({
                Picturelist: state => state.Image.Picturelist
            })
        },
        methods: {
            colorClick () {
                // this.$router.push
            },
            ...mapActions({
                list: 'Image/list',
                Images: 'Image/Images'
            }),
            param () {
                console.log('Imgid……', this.$route.query.id)
            }
        },
        mounted(){
            this.list(this.$route.query.id)
            console.log(this.Images)
        }

    }
</script>
<style lang="scss" scoped>
span{
    display:inline-block;
    font-size:.32rem;
}
.tit {
    position: fixed;
    background: #fff;
    display:flex;
    top: 0;
    width: 100%;
    height: .8rem;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 99;
    .color{
        :after {
            content: "";
            display: inline-block;
            padding-top: .16rem;
            padding-right: .16rem;
            border-top: 2px solid #ccc;
            border-right: 2px solid #ccc;
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            margin-left: .2rem;
            vertical-align: 5%;
        }
    }
    p {
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        color: #454545;
        display: inline-block;
        span {
            width: 2.6rem;
            display: inline-block;
            vertical-align: middle;
            line-height: 1.25;
            font-size: .28rem;
            :after {
                content: "";
                display: inline-block;
                padding-top: .16rem;
                padding-right: .16rem;
                border-top: 2px solid #ccc;
                border-right: 2px solid #ccc;
                -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
                margin-left: .2rem;
                vertical-align: 5%;
            }
            
        }
    }
     .second_p {
            border-left: 1px solid #ccc;
        }
    
}
ul{
    span{
        display:block;
    }
    margin-top: 1rem;
    li{
        display:flex;
        flex-wrap:wrap;
        .ImgBox{
            width:33%;
            padding:.01rem;
            
            img{
                width:100%;
                height:100%;
            }
            .pic{
                position:relative;
            }
        }
        .title{
          position: absolute;
          color:#fff;
        }
    }
}


</style>