module.exports = {
  title: "尽头的另一个我",
  description:"尽头的另一个我的博客",
  head:[
    ['link',{rel:'icon',href:'favicon.png'}],
    ['meta',{name:'author',content:'尽头的另一个我'}],
    ['meta',{name:'keywords',content:'vuepress 介绍,vuepress 说明,尽头的另一个我'}],
  ],
  themeConfig: {
    // navbar: false,
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
          { text: 'Group2', items: [/*  */] }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    // sidebar: 'auto'
    // sidebar:[
    //   // '',
    //   // 'about',
    //   // 'test',
    //   // {
    //   //   title: '你好 vuepress',   // 必要的
    //   //   path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //   //   collapsable: false, // 可选的, 默认值是 true,
    //   //   sidebarDepth: 1,    // 可选的, 默认值是 1
    //   //   children: [
    //   //     '/css/a',
    //   //     '/css/b',
    //   //     '/css/c'
    //   //   ]
    //   // },
    // ]

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