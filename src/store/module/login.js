// 数据区域
let state = {
  isLogin: false
}

// 突变区域 （同步操作）
let mutations = {
  changeLogin (state, payload) {
    console.log(state, payload)
    if (payload.username == 'chengxin' && payload.password == '123456') {
      console.log(111)
      state.isLogin = true
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations

}
