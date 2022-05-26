import axios from 'axios'

type TUserInfo = {
  uid: string,
  email: string,
  username: string,
  avatar: string,
  contacts: string,
  timestamp: string,
}
type TRespData = {
  code: number,
  message?: string,
  data?: TUserInfo | object | string
}

// json
const post = (url: string, data = {}): Promise<TRespData> => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}
// formData: application/x-www-form-urlencoded
const postFormData = (url: string, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then((res) => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}

const get = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params }).then((res) => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}

export {
  post,
  get,
  postFormData
}
