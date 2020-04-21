module.exports = {
  base: "/",
  port: 5555,
  dest: "site",
  title: 't8-dev-docs',
  description: 'Everyone can develop projects independently, quickly and efficiently！',
  themeConfig: {
    nav: [
      { text: 'Tools', link: '/tools/' },
    ],
    sidebar: [
      {
        title: 'Tools',
        path: '/tools/',
        collapsable: false
      }

    ]
  }
}