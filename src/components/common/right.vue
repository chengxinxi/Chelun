<template>
    <section :class="isShowList?'mask active':'mask'"  ref="section">
        <ul v-for="(item, index) in markList" :key="index" class="box1"
            @touchstart="touchstart"
            @touchmove="touchmove"
            @touchend="touchend"
        >
            <p class="car_title">{{item.GroupName}}</p>
            <li v-for="(value, key) in item.GroupList" :key="key"  @click="ckList(value.SerialID)">
               
                <img :data-src="value.Picture" class="Image" src="../../assets/black.png">
                <div>
                    <p class="small_t">{{value.AliasName}}</p>
                    <p class="red">{{value.DealerPrice}}</p>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
    import {mapState,mapActions,mapMutations} from 'vuex'
    import lazyload from '../../api/lazyload.js'
    export default {
        computed :{
            ...mapState({
                markList: state => state.app.markList,
                isShowList: state=>state.app.isShowList
            }),
            //  ...mapActions({
            //     ckList: 'app/ckList'
            // })
        },
       
        methods: {
            ckList (id) {
                this.$router.push({
                    path:'/detail',query:{id:id}
                });
            },
            
            ...mapMutations({
                hideMakeList: 'app/hideMakeList'
            }),
            touchstart(e){
               this.touch  = e.touches[0];
            },
            touchmove(e){
                let touch = e.touches[0];
                this.offsetX = touch.pageX - this.touch.pageX;
                if (this.offsetX > 0){
                    this.$refs.section.style = `transform:translate3d(${this.offsetX}px, 0, 0)`;
                }
                // console.log('滑动距离：……', this.offsetX, this.$refs.section);
            },
            touchend(e){
                this.$refs.section.style = ``;
                if (this.offsetX > 100){
                    this.hideMakeList();
                }
            }
        },
        updated() {
            lazyload('.mask')
        }
       
    }

</script>
<style scoped lang="scss">
body{
  font-size:  .28rem;
}
.mask{
     overflow-y:scroll;
    position: fixed;
    right: 0;
    top: 0;
    width: 66%;
    height:100%;
    font-size: .32rem;
    border: 1px solid #ccc;
    background: #fff;
    transform: translate3d(100%, 0, 0);
    box-shadow: -3px 0px 10px 0px rgba(0,0,0,.1);
}
.mask.active{
    transform: translate3d(0,0,0);
    transition: transform .3s linear;
}

.box1{
    overflow-y:scroll;
}
.car_title{
    margin-left: 1px;
    font-size: .28rem;
    line-height: .48rem;
    background: #f2f2f2;
    padding-left: .3rem;
    color: #717171;
}
li{
    margin-left: .1rem;
    display:flex;
    border-bottom:1px solid #ccc;
    .Image{
        margin: .1rem .2rem;
        width: 1.8rem;
        height: 1.2rem;
    }
    .small_t{
        font-size: .28rem;
        color: #5f687a;
        margin-top: .2rem;
    }
    .red{
        margin-top: .1rem;
        font-size: .28rem;
        color: red;
    }
}

</style>
