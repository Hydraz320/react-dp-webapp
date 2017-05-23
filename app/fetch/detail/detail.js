/**
 * Created by hydra320 on 2017/5/23.
 */
import {get} from '../get'

export function getInfoData(id) {
  const result = get('/api/detail/info/' + id)
  return result
}

export function getCommentData(page, id) {
  const result = get('/api/detail/comment/' + page + '/' + id)
  return result
}