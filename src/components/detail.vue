<template>
    <div class="">
      <img 
        class="car_Image"

        @click="ImageClick(carList.SerialID)"
        
         :src="carList.CoverPhoto" />
       <div class="info">
            <div>
                <p>{{carList.market_attribute && carList.market_attribute.dealer_price}}</p> 
                <p>指导价 {{carList.market_attribute && carList.market_attribute.official_refer_price}}</p>
            </div>
           
            <div class="action active flex-row">
                <button data-hover="hover" @click="BottomPrice">{{carList.BottomEntranceTitle}}</button>
            </div>
        </div>

        <li class="year">
            <span   @click="changeYear(item)"   :class="currentYear==item?'active':''" v-for="(item, index) in years" :key="index" >{{item}}</span>
        </li>

        <div class="list" v-for="(item, idx) in carList.list" :key="idx">
           <section>
                <ul v-for="(item, index) in list" :key="index">
                    <p class="title">{{index}}</p>
                    <li v-for="(value, key) in item" :key="key">
                        <p>{{value.market_attribute.year+'款 '+value.car_name}}</p>
                        <p>{{`${value.max_power}马力${value.gear_num}档${value.trans_type}`}}</p>
                        <p>
                            <span>{{`指导价${value.market_attribute.dealer_price_min}`}}</span>
                            <span>{{value.market_attribute.official_refer_price}}</span>
                        </p>
                        <button data-id="125796" data-hover="hover">询问底价</button>
                    </li>
                </ul>
            </section>
          
        </div>
        
        <!-- 底部询问底价 -->
        <div data-hover="hover" class="bottom flex-column flex-centerY" @click="BottomPrice">
            <p>询问底价</p> 
            <p>本地经销商为你报价</p>
        </div>
    </div>
</template> 
<script>
    import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
    export default {
        computed: {
            ...mapState({
                carList: state => state.app1.carList,
                currentYear: state => state.app1.currentYear
            }),
            ...mapGetters({
                years: 'app1/years',
                list: 'app1/list'
            })
        },
        methods: {
            ...mapActions({
                getnewList:'app1/getnewList'
            }),
             ...mapMutations({
                changeYear: 'app1/changeYear'
            }),
            param () {
                console.log('id……',this.$route.query.id)
            },
            BottomPrice () {
                this.$router.push({
                    path:'/Carsystem'
                })
            },
            // 点击汽车图片跳转
            ImageClick (id) {
                this.$router.push({
                    path:'/Img',
                    query:{
                        id:id
                    }
                })
            }
        },
        mounted() {
            // console.log(this)
            this.param();
            this.getnewList(this.$route.query.id)
        },
        updated() {
            // console.log('years……', this.years)
            // console.log('thislist……', this.list)

        },
        
    }
</script>
<style scoped lang="scss">
.wrap{
    overflow-x:hidden;
}
.car_Image{
    width:100%;
    height:4.5rem;
}
.info{
    display:flex;
    padding: .36rem .2rem .3rem;
    background: #fff;
    position: relative;
    p:first-child {
    font-size: .36rem;
    color: red;
    font-weight: 500;
        span {
        font-size: .32rem;
        font-weight: 400;
        }
    }
    p:nth-child(2) {
        font-size: .26rem;
        color: silver;
    }
}
.info .action {
    button:last-child {
        background: #00afff;
        color: #fff;
        width: 53%;
        height: .8rem;
        border-radius: 4px;
        border: 0;
        position: absolute;
        right: .3rem;
    }
}
.car-list .year {
    border-top: .15rem solid #f4f4f4;
    padding: 0 .3rem;
    font-size: .32rem;
    height: .77rem;
    line-height: .77rem;
    background: #fff;
}
.car-list .year span.active {
    color: #3aacff;
}
.car-list .year span {
    padding-right: .46rem;
}

 .year {
    border-top: .15rem solid #f4f4f4;
    padding: 0 .3rem;
    font-size: .32rem;
    height: .77rem;
    line-height: .77rem;
    background: #fff;
    .active{
         color: #3aacff;
    }
    span{
        padding-left:8px;
    }
}
.title{
    padding: 0 .2rem;
    height: .5rem;
    line-height: .5rem;
    font-size: .26rem;
    color: #999;
    background: #f4f4f4;
}
.list{
    overflow-x:hidden;
}
 ul {
    background: #fff;
    li{
        p:first-child {
            padding: .26rem 0 .18rem;
            font-size: .3rem;
            line-height: 1;
            color: #3d3d3d;
        }
        p:nth-child(2) {
            color: #bdbdbd;
            font-size: .26rem;
        }
        p:nth-child(3) {
            text-align: right;
            padding-bottom: .1rem;
            font-size: .24rem;
            color: #818181;
            span:nth-child(2) {
                font-size: .3rem;
                color: #ff2336;
                margin-left: .1rem;
            }
        }
        button {
            border: none;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            width: 110%;
            height: .8rem;
            font-size: .32rem;
            color: #00afff;
            background: #fff;
            font-weight: 500;
            margin-left: -.3rem;
        }
    }
}
.bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #3aacff;
    height: 1rem;
    color: #fff;
}
.bottom p:first-child {
    font-size: .32rem;
    margin-top: .12rem;
    font-weight: 500;
    text-align: center;
}
.bottom p:nth-child(2) {
    font-size: .24rem;
    text-align: center;

}
</style>

