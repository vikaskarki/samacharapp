const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://newsapi.org',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Rewrites the path to remove the `/api` prefix
      },
    })
  );
};
