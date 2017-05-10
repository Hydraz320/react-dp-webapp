/**
 * Created by hydra320 on 2017/5/8.
 */
export default {
  getItem: (key)=>{
    let value
    try {
      value = localStorage.getItem(key)
    } catch (e) {
      if(__DEV__) {
        console.error('localStorage.getItem报错', e.message)
      }
    } finally {
      return value
    }
  },
  setItem: (key, value) => {
    try {
      // ios 无痕模式会报错 所以需要捕获一下异常
      localStorage.setItem(key, value)
    } catch (e) {
      if(__DEV__) {
        console.error('localStorage.getItem报错', e.message)
      }
    }
  }
}