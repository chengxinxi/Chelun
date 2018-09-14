import {getBrandList, getMarkIdList} from '../../api/list'

// 数据区域
let state = {
  letters: [],
  brand: {},
  markId: [],
  markList: [],
  isShowList: false
}

// 突变区域 （同步操作）
let mutations = {
  getList: (state, payload) => {
    let letters = []
    let brand = {}
    payload.forEach((item) => {
      let spell = item.Spelling[0]
      if (letters.indexOf(spell) != -1) {
        // 只要把数据放到brand里
        brand[spell].push(item)
      } else {
        // 把新字母放到letters列表
        letters.push(spell)
        // 在brand里新建一项并赋值为一个数组
        brand[spell] = [item]
      }
    })

    state.letters = letters
    state.brand = brand
  },
  markList: (state, payload) => {
    state.markId = payload.id
    state.markList = payload.list
    state.isShowList = true
  },
  hideMakeList: (state) => {
    state.isShowList = false
  }
}

// 异步突变区域
let actions = {
  getList: ({commit}) => {
    getBrandList().then(res => {
      // console.log('body……', res)
      if (res.code == 1) {
        commit('getList', res.data)
      } else {
        console.log(res.msg)
      }
    })
  },
  // 组件车辆id
  IDClick: ({commit, state}, payload) => {
    console.log('IDcLICK123', payload)
    getMarkIdList(payload).then(res => {
      // console.log('ID……', res.data)
      commit('markList', {
        id: payload,
        list: res.data
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
