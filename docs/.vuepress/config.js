module.exports = {
    // site config
    lang: 'en-US',
    title: 'Eric\'s Blog',
    description: 'Eric\'s Blog/Library/Thoughts',

    // 
    head: [
      ['link', { rel: 'icon', href: 'images/main_icon_mag.png'}]
    ],

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/main_icon_mag.png', 
      nav: [
        { text: 'About', link: '/' },
        { text: 'CV', link: '/CV/' },
        { text: 'Project', link: '/project/' },
        { text: 'Library', link: '/library/' },
        { text: 'Links', link: '/link/' },
      ]
    },
  }
