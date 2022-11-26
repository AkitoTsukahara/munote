import aspida from '@aspida/axios'
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import queryString from 'query-string'
import api from '$api/$api'

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': `${import.meta.env.VITE_BASE_URL}`,
    'Access-Control-Allow-Methods': `PUT,PATCH,DELETE`,
    'Access-Control-Allow-Credentials': 'true',
    'Cross-Origin-Opener-Policy': `same-origin`,
    'Cross-Origin-Embedder-Policy': `require-corp`,
  },
  withCredentials: true,
  timeout: 10000,
  maxRedirects: 2
}

export const axiosInstance: AxiosInstance = axios.create(config)

export const client = () => {
  return api(
    aspida(axiosInstance, {
      paramsSerializer: (params) => queryString.stringify(params, { arrayFormat: 'bracket' })
    })
  )
}
