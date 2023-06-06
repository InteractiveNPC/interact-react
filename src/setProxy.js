const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/document/result/1',
    createProxyMiddleware({
      target: 'http://localhost:8080/document/result/1',
      changeOrigin: true,
    })
  );
  app.use(
    '/document/result/3',
    createProxyMiddleware({
      target: 'http://localhost:8080/document/result/3',
      changeOrigin: true,
    })
  );
};