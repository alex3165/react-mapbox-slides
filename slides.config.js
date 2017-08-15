module.exports = {
  themePath: './theme',
  transformWebpackConfig: config => {
    config.module.noParse = /(mapbox-gl)\.js$/
    return config
  }
}
