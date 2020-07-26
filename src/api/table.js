import axios from '@/utils/http'
import QS from 'qs'
import base from './base'

export function managerTable(params) {
  return axios({
    url: `${base.url}/business/manager/table`,
    method: 'get',
    params
  })
}

export function managerTableSearch(params) {
  return axios({
    url: `${base.url}/business/manager/table`,
    method: 'post',
    data: QS.stringify(params)
  })
}
