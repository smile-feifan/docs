const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
   base:'/docs/',
  title: "尽头的另一个我",
  description:"尽头的另一个我的博客",
  head:[
    ['link',{rel:'icon',href:'favicon.png'}],
    ['meta',{name:'author',content:'尽头的另一个我'}],
    ['meta',{name:'keywords',content:'vuepress 介绍,vuepress 说明,尽头的另一个我'}],
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          return moment(timestamp).format("LLLL")
        }
      }
    ]
  ],
  themeConfig: {
   
    lastUpdated: '更新时间', // string | boolean
    logo: '/assets/img/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'css', link: '/css/' },
      { text: 'javascript', link: '/javascript/' },
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [{ text: 'Home', link: '/' },
          { text: 'About', link: '/about/' }] },
          // { text: 'Group2', items: [/*  */] }
        ]
      },
     
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar :{
      '/css/':[
        '',
        'a',
        'b',
        'c'
      ],
      '/javascript/':[
        '',
        'a',
        'b',
        'c'
      ],
      // fallback
      '/':[
        '',
        'about',
        'test'
      ],
    }
  }
}