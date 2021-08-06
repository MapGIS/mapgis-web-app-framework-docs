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
  other: [
    '/guide/other/change-log',
    '/guide/other/faq',
    '/guide/other/from-community'
  ],
  builder: [
    '/api/reference/manager',
    '/api/reference/app-mixin',
    '/api/reference/map-mixin',
    '/api/reference/theme-mixin',
    '/api/reference/theme-content-mixin',
    '/api/reference/panel-mixin',
    '/api/reference/widget-info-mixin',
    '/api/reference/widget-mixin'
  ],
  utils: ['/api/reference/utils/utils'],
  objects: ['/api/reference/objects/objects'],
  document: ['/api/reference/document/document'],
  feature: ['/api/reference/feature/feature'],
  metadata: ['/api/reference/metadata/metadata'],
  analysis: ['/api/reference/analysis/analysis'],
  overlay: ['/api/reference/overlay/overlay'],
  'common-components': [
    '/components/common/icon',
    '/components/common/button',
    '/components/common/placement',
    '/components/common/toolbar',
    '/components/common/window',
    '/components/common/group-tab',
    '/components/common/setting-form'
  ],
  'map-components': [
    '/components/map/map-pro',
    '/components/map/draw-pro',
    '/components/map/marker-pro',
    '/components/map/marker-plotting'
  ],
  'builder-components': [
    '/components/builder/app-loader',
    '/components/builder/map-container',
    '/components/builder/map-panel',
    '/components/builder/map-widget-indicator',
    '/components/builder/window-wrapper'
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
