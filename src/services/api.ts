import axios, { AxiosResponse } from 'axios';
import { store } from '../store';
import { loadingActionsFunctions } from '../store/modules/loading/actions';

const { setLoadingTrue, setLoadingFalse } = loadingActionsFunctions

const httpConfig = axios.create({
  baseURL: String(process.env.REACT_APP_SWAPI_API_BASE_URL),
  headers: {
    Accept: 'application/json',
  },
})

httpConfig.interceptors.request.use(
  request => {
    store.dispatch(setLoadingTrue())
    return request 
  },
  error => {
    return Promise.reject(error)
  }
)

httpConfig.interceptors.response.use(
  response => {
    store.dispatch(setLoadingFalse())
    return response 
  },
  error => {
    return Promise.reject(error)
  }
)

export const api = async (
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  url: string,
  data = {}
): Promise<AxiosResponse<any>> => {
  return httpConfig
    .request({
      method,
      url,
      data,
    })
    .then(response => response)
}
