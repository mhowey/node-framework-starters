const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello world - Koa';
})
const port = process.env.PORT || 4001;
console.log(`Koa server is running at http://localhost:${port}`)
app.listen(port);