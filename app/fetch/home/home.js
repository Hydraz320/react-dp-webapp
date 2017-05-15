/**
 * Created by hydra320 on 2017/5/15.
 */

import { get } from '../get'

export function getAdData() {
  const result = get('/api/homead')
  return result
}

export function getListData(city, page) {
  const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
  return result
}