import {getImage} from '../../api/list'

let state = {
  Picturelist: []
}
let mutations = {
  Picturelist: (state, payload) => {
    state.Picturelist = payload
    console.log(state)
  }
}
let actions = {
  list ({commit}, payload) {
    getImage(payload).then(res => {
      if (res.code == 1) {
        commit('Picturelist', res.data)
      } else {
        console.log('img……', res.msg)
      }
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
