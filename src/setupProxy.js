const { createProxyMiddleware }  = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware("/json/events/", {
            target: "http://api.eventful.com",
            changeOrigin: true
        })
    );
};