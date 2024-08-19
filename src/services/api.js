import axios from 'axios'

const api = axios.create({
  baseURL: 'http://locashost:3000'
})

export default api