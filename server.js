/* eslint-disable */
const express = require('express')
const next = require('next')
const compression = require('compression')
const routes = require('./src/routes')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = routes.getRequestHandler(app)

const proxy = {
  '/api': {
    target: process.env.NEXT_STATIC_API_ENDPOINT,
    changeOrigin: true,
  },
}

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())
    const proxyMiddleware = require('http-proxy-middleware')
    server.use(proxyMiddleware('/api', proxy['/api']))

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res))

    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
