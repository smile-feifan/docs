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
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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
    ],
    [
    '@vuepress/pwa', 
    {      
     serviceWorker: true,
     updatePopup: {
       message: "发现新的功能可用",
       buttonText: "刷新"
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