import 'whatwg-fetch'
import 'es6-promise'

// 其实这里用formdata应该也行
function postStringify(bodyObj) {
  let keys = Object.keys(bodyObj)
  let body = ''
  for(let key of keys) {
    body = body.concat(`&${key}=${encodeURIComponent(bodyObj[key])}`)
  }
  return body.slice(1)
}

export function post(url, bodyObj) {
  let result = fetch(url, {
    method: 'POST',
    credentials: 'include',
    header: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: postStringify(bodyObj)
  })
  return result
}