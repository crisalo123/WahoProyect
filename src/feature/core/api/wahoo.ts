import axios from 'axios'

import {API_BASE_URL} from '@/feature/core/const/app'

export const wahooApi = axios.create({
  baseURL: API_BASE_URL
 })


 wahooApi.interceptors.response.use(
    (res) => res.data,
    (error) => Promise.reject(error)
 )



 wahooApi.interceptors.request.use((config) => {
   // Aquí puedes obtener el token cuando el login esté implementado
  // const { token } = useBoundStore.getState();
  
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

   return config
 })

