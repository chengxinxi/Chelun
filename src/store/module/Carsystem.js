let state = {
  isShowCity: false,
  city: {name: '北京'}
}

let mutations = {
  cityClick: (state, payload) => {
    state.isShowCity = true
  },
  updateCity (state, payload) {
    console.log(payload)
    state.city = payload
    state.isShowCity = false
  }
}

let actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
