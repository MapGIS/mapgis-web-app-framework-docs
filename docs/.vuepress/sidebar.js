const sidebar = {
  introduction: ['/guide/', '/guide/introduction/config'],
  development: [
    '/guide/development/base',
    '/guide/development/style',
    '/guide/development/svg'
  ],
  advanced: [
    '/guide/advanced/theme-custom',
    '/guide/advanced/widget-custom',
    '/guide/advanced/panel-custom',
    '/guide/advanced/style-guide',
    '/guide/advanced/uset-typescript'
  ],
  other: ['/guide/other/faq', '/guide/other/from-community'],
  api: [
    '/api/reference/manager',
    '/api/reference/app-mixin',
    '/api/reference/map-mixin',
    '/api/reference/theme-mixin',
    '/api/reference/theme-content-mixin',
    '/api/reference/panel-mixin',
    '/api/reference/widget-info-mixin',
    '/api/reference/widget-mixin'
  ],
  components: [
    '/components/app-loader',
    '/components/mapbox-view',
    '/components/cesium-view',
    '/components/map-container',
    '/components/icon',
    '/components/map-widget-button',
    '/components/placement',
    '/components/window',
    '/components/window-wrapper',
    '/components/map-widget-panel',
    '/components/content-widget-panel'
  ]
}

function getSidebarByCategory(category, lang = 'en') {
  const links = JSON.parse(JSON.stringify(sidebar[category])) // Deep clone
  return links.map(link => {
    if (lang != 'en' && link.startsWith('/')) {
      return `/${lang}${link}`
    }
    return link
  })
}

module.exports = {
  getSidebarByCategory
}
