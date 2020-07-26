import axios from '@/utils/http'
import QS from 'qs'
import base from '@/api/base'

export function login(params) {
  return axios({
    url: `${base.url}/login`,
    method: 'post',
    data: QS.stringify(params)
  })
}
