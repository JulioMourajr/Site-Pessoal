import axios from 'axios'

const api = axios.create({
  baseURL: 'https://json-server-ex-b96v.onrender.com'
})

export default api