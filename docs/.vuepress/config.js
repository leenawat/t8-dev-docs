module.exports = {
  base: "/",
  port: 5555, 
  dest: "site",
  title: 't8-dev-docs',
  description: 'Everyone can develop projects independently, quickly and efficiently！',
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}