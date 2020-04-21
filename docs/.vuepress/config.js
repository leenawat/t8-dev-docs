module.exports = {
  base: "/t8-dev-docs",
  port: 5555,
  dest: "site",
  title: 'T8 Dev Docs',
  description: 'Everyone can develop projects independently, quickly and efficiently！',
  themeConfig: {
    nav: [
      { text: 'SA', link: '/sa/' },
      { text: 'Data setup', link: '/data-setup/' },
      { text: 'Frontend', link: '/frontend/' },
      { text: 'Backend', link: '/backend/' },
      { text: 'Server', link: '/server/' },
    ],
    sidebar: [
      {
        title: 'SA',
        path: '/sa/',
        collapsable: false
      },
      {
        title: 'Data setup',
        path: '/data-setup/',
        collapsable: false
      },
      {
        title: 'Frontend',
        path: '/frontend/',
        collapsable: false,
      },
      {
        title: 'Backend',
        path: '/backend/',
        collapsable: false,
        children: [
          '/backend/code',
          '/backend/tools'
        ]
      },
      {
        title: 'Server',
        path: '/server/',
        collapsable: false
      }
    ]
  }
}