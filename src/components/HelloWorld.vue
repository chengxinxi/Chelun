<template>
  <div class="wrap">
    <div class="box1">
      <section>
        <div v-for="(item, index) in brand" :key="index">
          <ul>
            <p :id="index">{{index}}</p>
            <li v-for="(value, key) in item" :key="key" @click="IDClick(value.MasterID)" >
              <img :data-src="value.CoverPhoto" src="../assets/black.png">
              <span>{{value.Name}}</span>    
            </li>
          </ul>
        </div>
      </section>
      </div>
      <aside  @touchstart="touchStart"
              @touchmove="touchmove"
              @touchend="touchEnd">
        <span v-for="(item, index) in letters" :key="index">{{item}}</span>    
      </aside>
      <div class="alert" v-show="flag">
        <span class="font_title" ref="smallletter"></span>
      </div>
      <Right ></Right>
  </div>
</template>

<script>
import Right from './common/right'
import lazyload from '../api/lazyload.js'
import {mapState, mapActions} from 'vuex'
export default {
   data :() => {
     return {
       flag:false
     }
   },
   components:{
     Right
   },
   mounted(){
    this.$store.dispatch("app/getList")

  },
  computed: {
    ...mapState({
      letters: state=>state.app.letters,
      brand: state=>state.app.brand
    })
  },
  methods: {
    ...mapActions({
      getList:'app/getList',
      IDClick : 'app/IDClick'
    }),
    touchStart(e){
      this.flag = true
      this.$refs.smallletter.innerHTML = e.target.innerHTML
    },
    touchmove(e){
      let pageY = e.touches[0].pageY;
      let index = Math.floor((pageY-this.marginTop)/this.height);
      // console.log(index);
      // 字母边界处理
      if (index < 0){
        index = 0;
      }else if(index > this.letters.length-1){
        index = this.letters.length - 1;
      }
      // console.log('letter...', this.letters[index]);
      
      let ele = document.getElementById(this.letters[index]);
      // console.log('ele……', ele)
      let top = ele.offsetTop;
      // console.log(top)
      // 当该元素距离顶部的高度赋给滚动元素的scorllTop实现滚动
      document.querySelector('.wrap').scrollTop = top;
      this.$refs.smallletter.innerHTML = this.letters[index];

    },
    touchEnd(){
      this.flag = false
    }
  },
  updated() {
    console.log(21)
    // 获取每个字母的高度
    this.height = 0.4*window.innerWidth/750*100;
    // 获取字母列表距离顶部的高度
    this.marginTop = (window.innerHeight - (this.letters.length)*this.height)/2;
    lazyload('.wrap')
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{
    margin:0;
    padding:0;
    list-style:none;
    body:.32rem;
  }
 
  .box{
    height: 100%;
    background:#fff;
  }
  .wrap{
    height: 100%;
    overflow: scroll;
  }
  aside{
    position: fixed;
    top: 50%;
    right: .1rem;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      font-size: .24rem;
      color: #666;
      font-weight: 500;
      padding: .02rem .1rem;
      height: 0.4rem;
      box-sizing: border-box;
    }
  }
  ul{
    p{
      font-size: .28rem;
      line-height: .4rem;
      background: #f4f4f4;
      padding-left: .3rem;
      color: #aaa;
    }
    li{
      margin: 0 .3rem;
      height: 1rem;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
    }
    img{
      height: .8rem;
    }
    span{
      font-size: .32rem;
      margin-left: .4rem;
    }
  }
  .alert{
    width:1rem;
    height:1rem;
    line-height:2rem;
    background:#A8A8A8;
    position:absolute;
    top:50%;
    left:70%;
    transform: translate3D(-50%,-50%);
    span{
      color: #fff;
      display:flex;
      justify-content: center;
      line-height:1rem;
      font-size:25px;
    }
  }
</style>
