<template>
    <div>
        <!-- 头部 -->
        <div data-hover="hover" class="car_acr">
            <img src="http://img2.bitautoimg.com/autoalbum/files/20180802/883/1213438838_3.jpg" class="car_image">
             <div class="fck">
                 <p>宝马5系</p> <p>2018款 525Li 豪华设计套装</p>
            </div>
        </div>
        <!-- 个人信息 -->
        <div class="self-info">
            <p class="tip">个人信息</p>
            <ul>
                <li>
                  <span>姓名</span>
                  <input type="text" placeholder="输入你的真实中文姓名" maxlength="4">
                </li> 
                <li>
                  <span>手机</span> 
                  <input type="tel" placeholder="输入你的真实手机号码" maxlength="11">
                </li> 
                <li @click="cityClick">
                  <span>城市</span> 
                  <span>{{city.name}}</span>
                </li>
            </ul> 
            <div class="quotation">
              <button data-hover="hover" class="">询最低价</button>
            </div>
            <div class="yzm">
              <button data-hover="hover" class="">获取验证码</button>
            </div>
            <CityList :class="isShowCity?'active':''"></CityList>
        </div>
    </div>
</template> 
<script>
  import {mapState,mapMutations} from 'vuex'
  import CityList from './common/CityList'
  export default {
    computed: {
      ...mapState({
        isShowCity: state=>state.Carsystem.isShowCity,
        city: state => state.Carsystem.city
      })
    },
    components: {
      CityList
    },
    mounted() {
    },
    methods:{
      ...mapMutations({
        cityClick: 'Carsystem/cityClick'
      })
    },
    updated() {
      // console.log(this.isShowCity)
    }
  }
</script>
<style lang="scss" scoped>
p{
  font-size:.32rem;
}
.car_acr {
  display: flex;
  background: #fff;
  padding: 0.32rem 0.18rem 0.24rem;
  position: relative;
  height: 2rem;
  box-sizing: border-box;
}
.car_image {
  width: 33%;
}
.car_acr:before {
  content: "";
  display: inline-block;
  padding-top: 0.16rem;
  padding-right: 0.16rem;
  border-top: 2px solid #ccc;
  border-right: 2px solid #ccc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  right: 0.26rem;
  top: 0.9rem;
}
.fck {
  margin-top: 0.2rem;
}
.tip {
  height: 0.5rem;
  line-height: 0.5rem;
  margin-left: 0.2rem;
}
.self-info ul {
  background: #fff;
  padding: 0 0.2rem;
  li {
    font-size: 0.32rem;
    height: 0.88rem;
    line-height: 0.88rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    color: #000;
    input {
      font-size: 0.32rem;
      padding-right: 0.2rem;
      width: 88%;
      text-align: right;
      box-sizing: border-box;
      color: #555;
      border: none;
    }
    span:nth-child(2) {
      display: inline-block;
      width: 88%;
      color: #555;
      text-align: right;
      box-sizing: border-box;
    }
    span:nth-child(2):after {
      content: "";
      display: inline-block;
      padding-top: 0.16rem;
      padding-right: 0.16rem;
      border-top: 1px solid silver;
      border-right: 1px solid silver;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
.quotation {
  position: relative;
  width: 100%;
  height: 2rem;
  background: #fff;
  margin: auto;
}
.quotation button {
  position: absolute;
  left: 3rem;
  top: 0.3rem;
  margin: -159px -100px;
  font-size: 0.32rem;
  color: #fff;
  width: 80%;
  background: #3aacff;
  height: 0.7rem;
  border-radius: 0.1rem;
  border: none;
  margin-top: 0.3rem;
}
.yzm {
  position: relative;
  width: 100%;
  // height: 2rem;
  background: #fff;
  margin: auto;
}
.yzm button {
  position: absolute;
  left: 3rem;
  // top: 0.3rem;
  margin: -159px -100px;
  font-size: 0.32rem;
  color: #fff;
  width: 80%;
  background: #3aacff;
  height: 0.7rem;
  border-radius: 0.1rem;
  border: none;
  margin-top: 0.05rem;
}
.cityList{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    transition:all .3s linear;
    transform:translate3d(0,100%,0);
    background: #fff;
}
.active{
    transform: translate3d(0,0,0)
}
</style>