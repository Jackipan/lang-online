/*
 * @Author: PanFeng
 * @Date: 2020-04-28 13:28:35
 */
module.exports = {
    publicPath: '/',
    devServer: {
        port: '8080'
    },
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
    }
}