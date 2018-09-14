import {
  getCarIdList
} from '../../api/list'

let state = {
  carList: {},
  currentYear: '全部'
}
let getters = {
  years (state) {
    if (!state.carList.list) {
      return []
    }
    let arr = state.carList.list.map(item => {
      return item.market_attribute.year
    })
    let set = new Set(arr)
    return ['全部', ...set]
  },
  list (state) {
    if (!state.carList.list) {
      return []
    }
    // 把排量和吸气类型相同的数据做个合并
    function merge (arr) {
      let types = []
      let obj = {}
      // console.log('arr..', arr)
      arr.forEach(item => {
        let type = item.exhaust_str + '/' + item.max_power_str + ' ' + item.inhale_type
        if (types.indexOf(type) == -1) {
          types.push(type)
          obj[type] = [item]
        } else {
          obj[type].push(item)
        }
      })
      // console.log('123', obj)
      return obj
    }

    if (state.currentYear === '全部') {
      return merge(state.carList.list)
    } else {
      return merge(state.carList.list.filter(item => {
        return item.market_attribute.year === state.currentYear
      }))
    }
  }
}

let mutations = {
  // 年份改变
  changeYear (state, payload) {
    // console.log('123', payload)
    state.currentYear = payload
  },
  // 全部的数据
  newList: (state, payload) => {
    // console.log('newList……', payload.list.list)
    payload.list.list.sort((a, b) => {
      // 先按照年份排序 降序,
      if (b.market_attribute.year != a.market_attribute.year) {
        return b.market_attribute.year - a.market_attribute.year
      } else {
        // 按照排量排序 升序
        if (b.exhaust_str > a.exhaust_str) {
          return -1
        } else if (b.exhaust_str < a.exhaust_str) {
          return 1
        } else {
          // 按照功率排序 升序
          if (b.max_power_str > a.max_power_str) {
            return -1
          } else if (b.max_power_str < a.max_power_str) {
            return 1
          } else {
            // 按照指导价格排序 升序
            if (b.market_attribute.dealer_price_min > a.market_attribute.dealer_price_min) {
              return -1
            } else {
              return 1
            }
          }
        }
      }
    })
    // console.log('去重……', payload.list)
    state.carList = payload.list
  }
}

let actions = {
  getnewList: ({commit}, payload) => {
    // console.log('newState……', payload)
    getCarIdList(payload).then(res => {
      // console.log(res.data)
      commit('newList', {
        list: res.data
      })
    })
  }
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
