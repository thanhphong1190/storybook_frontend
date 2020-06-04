// this is used to load fontawesome properly
const withCSS = require('@zeit/next-css')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()

module.exports = withNextEnv(
  withCSS({
    webpack(config) {
      config.node = { fs: 'empty', module: 'empty' }
      return config
    },
  })
)
