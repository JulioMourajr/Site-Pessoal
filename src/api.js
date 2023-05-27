import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sitepessoalapi.onrender.com/api'
})

export default api