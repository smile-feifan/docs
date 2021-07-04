const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf')



module.exports = {
  base: '/docs/',
  title: "尽头的另一个我",
  description: "尽头的另一个我的博客",
  head: headConf,
  plugins: pluginsConf,
  themeConfig: {

    lastUpdated: '更新时间', // string | boolean
    logo: '/assets/img/logo.jpg',
    nav: navConf,
    sidebar: sidebarConf,
  }
}