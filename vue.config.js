const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dida-1-website/'
    : '/',
  lintOnSave: false,
  chainWebpack:config=>{
    const dir = path.resolve(__dirname,'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options=>({...options, plugin:[{removeAttrs:{attrs:'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin', [{plainSprite:true}]))
    config.module.rule('svg').exclude.add(dir)
  }
}
// module.exports = {
//   devServer: {
//     host: '0.0.0.0',
//     port: 8080,
//   }
// }