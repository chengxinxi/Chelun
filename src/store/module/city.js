import {cityList, citieslist} from '../../api/list'
let state = {
  Province: [],
  list: [],
  newList: [],
  isShowCities: false // 点击省份数据
}

let mutations = {
  list: (state, payload) => {
    state.list = payload
    // console.log('...list', payload)
  },
  // 城市数据
  newList: (state, payload) => {
    // console.log(payload)
    state.newList = payload
  },
  closeDate (state, payload) {
    // console.log(11)
    state.isShowCities = false
  }

}

let actions = {
  // 省份数据
  cityList ({commit}, payload) {
    // console.log(payload)
    cityList().then(res => {
      commit('list', res.data)
    })
  },
  // 城市数据
  citieslist ({commit}, payload) {
    console.log(payload)
    citieslist(payload).then(res => {
      console.log(res.data)
      commit('citlist', res.data)
    })
  },
  citiesClick ({commit, state}, payload) {
    state.isShowCities = !state.isShowCities
    citieslist(payload).then(res => {
      commit('newList', res.data)
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
