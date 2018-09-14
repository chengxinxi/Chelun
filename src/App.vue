<template>
  <div id="app">
    <router-view></router-view>
    <!-- <HelloWord /> -->
  </div>
</template>

<script>
import HelloWord from './components/HelloWorld'
export default {
  name: 'App',
  data : () => {
    return {

    }
  },
  components: {
    HelloWord
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style:none;
 
}
#app,html,body{
  width:100%;
  height:100%;
}
</style>
