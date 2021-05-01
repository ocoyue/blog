module.exports = {
  title: '花生学院',
  description: '少年易老学难成，一寸光阴不可轻',
  dest: './dist',
  port: '8881',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js'),
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: '有新的内容.',
        buttonText: '更新',
      },
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！',
  },
}
