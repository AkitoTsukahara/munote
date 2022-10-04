import aspida from '@aspida/axios'
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import queryString from 'query-string'
import api from '$api/$api'

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
  withCredentials: true,
  timeout: 10000,
  maxRedirects: 2
}

export const axiosInstance: AxiosInstance = axios.create(config)

export const client = () => {
  return api(
    aspida(axiosInstance, {
      paramsSerializer: function (params) {
        return queryString.stringify(params, { arrayFormat: 'bracket' })
      }
    })
  )
}