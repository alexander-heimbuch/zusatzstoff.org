module.exports = {
    title: 'Zusatzstoff.org',
    description: 'Create. Destroy. Repeat',
    theme: 'casper',
    base: '',
    head: [
      ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    markdown: {
      anchor: {
        permalink: false,
        permalinkBefore: false
      }
    },
    themeConfig: {
      cover: 'background.jpg',
      nav: [{
        text: 'Home',
        link: '/'
      }, {
        text: 'Posts',
        link: '/posts'
      }, {
        text: 'Ikeahacks',
        link: '/category/ikeahacks'
      }, {
        text: 'Mac',
        link: '/category/mac'
      }],
  
      footer: [{
        text: 'Impressum',
        link: '/impressum.html'
      }],
      social: {
        github: 'https://github.com/alexander-heimbuch/vuepress-theme-casper',
        twitter: 'https://twitter.com/zusatzstoff'
      }
    }
  }