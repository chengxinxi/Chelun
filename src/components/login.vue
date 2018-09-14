<template>
    <div class="box">
         <div id="particles-js"></div>
         <div class="login">
            <p class="title">登录</p>
            <input type="text" placeholder="请输入用户名" class="ipt" ref="username">
            <input type="password" placeholder="请输入密码" class="ipt" ref="password">
            <button class="button" @click="login">登录</button>  
        </div>
        
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        mounted() {
            particlesJS.load('particles-js','static/data/particles.json',function () {
            console.log('callback - particles.js config loaded')
            })
        },
        methods : {
            login () {
                let username = this.$refs.username.value,
                    password = this.$refs.password.value
                if (username == "chengxin" && password == "123456") {
                    console.log(username, password)
                    window.localStorage.setItem('login', true)
                    
                    this.$router.push('/helloword')

                }
            }
        }
    }
</script>

<style scoped>
*{
    padding:0;
    margin:0;
    list-style:none;
}
.box{
    font-size: .32rem;
    width:100%;
    height:100%;
    background:url('../assets/bg.jpg');
  
}
.login{
    width: 80%;
    height: 5.5rem;
    background: #fff;
    position: fixed;
    top: 2.5rem;
    left: .8rem;
    border-radius: 4px;
}
.title{
    text-align: center;
    line-height:1rem;
    font-size:.6rem;
    margin-bottom:.3rem;
}
.ipt{
    display:block;
    width:90%;
    height:.6rem;
    margin-bottom: .4rem;
    margin-left: .2rem;
    padding:0 3px;
}
.button{
    width:95%;
    height:.8rem;
    background:#0f0;
    border:none;
    border-radius:4px;
    margin-left: .1rem;

}
</style>