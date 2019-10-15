import axios from 'axios'
import {getAuthId} from './auth'

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {'user_id': getAuthId()}
})



export default api