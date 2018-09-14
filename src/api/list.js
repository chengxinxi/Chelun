const sendRequest = (url, method = 'GET', body = {}) => {
  if (/\?/.test(url)) {
    url += '&_=' + (+new Date())
  } else {
    url += '?_=' + (+new Date())
  }
  let params = {method}
  if (method == 'POST') {
    params.body = JSON.stringify(body)
  }
  return fetch(url, params).then(res => res.json())
}
export let getBrandList = () => {
  return sendRequest('https://baojia.chelun.com/v2-car-getMasterBrandList.html')
}

// 车辆Id数据
export let getMarkIdList = (id) => {
  return sendRequest(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}

// 车辆详情数据
export let getCarIdList = (cardId) => {
  return sendRequest(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${cardId}`)
  // =4598&_1536140673878
}

// 车辆图片
export let getImage = (ImageId) => {
  return sendRequest(`https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${ImageId}`)
}

// 图片下的图片
export let getImgList = (SerialID, ColorID = null, CarID = null) => {
  let search = `SerialID=${SerialID}`
  if (CarID) {
    search += `&CarID=${CarID}`
  }
  if (ColorID) {
    search += `&ColorID=${ColorID}`
  }
  return sendRequest(`${host}/v2-car-getImageList.html?${search}`)
}

// 城市渲染（省渲染数据）
export let cityList = () => {
  return sendRequest(`https://baojia.chelun.com/v1-city-alllist.html`)
}

// （市渲染数据）
export let citieslist = (id) => {
  return sendRequest(`https://baojia.chelun.com/v1-city-alllist.html?provinceid=${id}`)
}
