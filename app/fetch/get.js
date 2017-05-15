import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
  let result = fetch(url, {
    credentials: 'include',
    header: {
      accept: 'application/json, text/plain, */*'
    }
  })
  return result
}