const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api',createProxyMiddleware({ target: 'https://reactbend.herokuapp.com/', changeOrigin: true, }))
  // app.use('/api',createProxyMiddleware({ target:'localhost:3000/', changeOrigin: true, }))
  app.use('/openapi.twse.com.tw/v1',createProxyMiddleware({ target: 'https://openapi.twse.com.tw/v1', changeOrigin: true, }))
};