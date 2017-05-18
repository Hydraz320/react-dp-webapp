/**
 * Created by hydra320 on 2017/5/14.
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// home首页 超值特惠
let homeAdData = require('./home/ad')
router.get('/api/homead', async (ctx) => {
  ctx.body = homeAdData
})

// home首页 猜你喜欢
let homeListData = require('./home/list')
router.get('/api/homelist/:city/:page', async (ctx) => {
  const params = ctx.params
  const paramsCity = params.city
  const paramsPage = params.page

  console.log('当前城市：' + paramsCity)
  console.log('当前页数：' + paramsPage)

  ctx.body = homeListData
});

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
console.log('server listening -p 3000...')