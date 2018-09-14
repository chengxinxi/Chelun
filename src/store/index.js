import vue from 'vue'
import vuex from 'vuex'
import app from './module/app' // 引入module中的模块
import app1 from './module/app1' // 引入module中的模块
import Image from './module/Image' // 引入module中的模块
import login from './module/login' // 引入module中的模块
import city from './module/city' // 引入module中的模块
import Carsystem from './module/Carsystem' // 引入module中的模块

import createRenderer from 'vuex/dist/logger' // 代码日志

vue.use(vuex) // 挂载vuex
export default new vuex.Store({
  modules: { // 抛出模块
    app,
    app1,
    Image,
    login,
    city,
    Carsystem
  },
  plugins: [createRenderer()] // 调用代码日志
})
