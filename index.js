require('http-proxy')
  .createProxyServer({ target:'http://rancher-metadata.rancher.internal' })
  .listen(process.env.PORT || 8080)
