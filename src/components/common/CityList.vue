<template>
    <div class="cityList">
        <div class="cityBox">
            <p  v-for="(item, index) in list" :key="index" @click="citiesClick(item.CityID)" >{{item.CityName}}</p>
        </div>
        <div :class="isShowcities?'citiesbox active':'citiesbox'" @click="cityBoxClick">
            <div class="right">
                <p  v-for="(item, index) in newList" :key="index" :data-id="item.CityID"> {{item.CityName}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState({
            list: state => state.city.list,
            newList: state => state.city.newList,
            isShowcities: state => state.city.isShowCities
        })
    },
    methods:{
        ...mapActions({
            cityList:'city/cityList',
            citieslist:'city/citieslist',
            citiesClick:'city/citiesClick',
            
        }),
         ...mapMutations({
            updateCity: 'Carsystem/updateCity',
            closeDate: 'city/closeDate'
        }),
        cityBoxClick (e) {
            if (e.currentTarget == e.target) {
                this.closeDate()
            } else if( e.target.tagName == 'P') {
                this.updateCity({
                    id: e.target.dataset.id,
                    name:e.target.innerText
                })
            }
            
        }
    },
    mounted() {
        this.cityList()
    },
    updated() {
        // console.log('123', this.isShowcities)
    },
}
</script>

<style scoped lang="scss">
.cityBox{
    overflow: scroll;
    height: 100%;
    p{
        padding-left: .3rem;
        font-size: .28rem;
        height: .8rem;
        line-height: .8rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        margin-left: .1rem;
        position: relative;
        &:after{
            content: "";
            display: inline-block;
            padding-top: .16rem;
            padding-right: .16rem;
            border-top: 1px solid #999;
            border-right: 1px solid #999;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            right: .35rem;
            top: .3rem;
        }
    }
   
} 
.citiesbox{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    transition:all .3s linear;
    transform:translate3d(0,100%,0);
    background: rgba(0, 0, 0, .7);
    .right{
        width:70%;
        height:100%;
        overflow-y:scroll;
        background:#fff;
        position:fixed;
        top:0;
        right:0;
        p{
            padding-left: .3rem;
            font-size: .28rem;
            height: .8rem;
            line-height: .8rem;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            margin-left: .1rem;
        }
    }
}
.active{
    transform: translate3d(0,0,0)
}
</style>
