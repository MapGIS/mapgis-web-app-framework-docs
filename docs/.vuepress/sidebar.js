const sidebar = {
  introduction: ['/guide/'],
  start: ['/guide/start/start'],
  development: [
    '/guide/development/base',
    '/guide/development/exhibition',
    '/guide/development/style',
    '/guide/development/svg'
  ],
  advanced: [
    '/guide/advanced/theme-custom',
    '/guide/advanced/widget-custom',
    '/guide/advanced/panel-custom',
    '/guide/advanced/style-guide'
  ],
  version: ['/guide/version/change-log'],
  other: ['/guide/other/faq', '/guide/other/from-community'],
  config: ['/config/base', '/config/theme', '/config/widget', '/config/app'],
  utils: [
    '/api/reference/utils/common-util',
    '/api/reference/utils/string-util',
    '/api/reference/utils/object-util',
    '/api/reference/utils/array-util',
    '/api/reference/utils/time-util',
    '/api/reference/utils/color-util',
    '/api/reference/utils/dom-util',
    '/api/reference/utils/url-util'
  ],
  objects: [
    '/api/reference/objects/scene-controller',
    '/api/reference/objects/geometry',
    '/api/reference/objects/spatial-ref'
  ],
  document: [
    '/api/reference/document/document',
    '/api/reference/document/map',
    '/api/reference/document/layer/3d-layer',
    '/api/reference/document/layer/arcgis-map-image-layer',
    '/api/reference/document/layer/arcgis-tile-layer',
    '/api/reference/document/layer/data-flow-layer',
    '/api/reference/document/layer/feature-layer',
    '/api/reference/document/layer/geo-json-layer',
    '/api/reference/document/layer/graphics-layer',
    '/api/reference/document/layer/group-layer',
    '/api/reference/document/layer/igs-feature-layer',
    '/api/reference/document/layer/igs-map-image-layer',
    '/api/reference/document/layer/igs-scene-layer',
    '/api/reference/document/layer/igs-tile-layer',
    '/api/reference/document/layer/igs-vector-layer',
    '/api/reference/document/layer/layer',
    '/api/reference/document/layer/map-image-layer',
    '/api/reference/document/layer/model-cache-layer',
    '/api/reference/document/layer/ogc-wms-layer',
    '/api/reference/document/layer/ogc-wmts-layer',
    '/api/reference/document/layer/scene-layer',
    '/api/reference/document/layer/tile-layer',
    '/api/reference/document/layer/vector-tile-layer',
    '/api/reference/document/layer/web-tile-layer'
  ],
  feature: [
    '/api/reference/feature/feature-query',
    '/api/reference/feature/feature-edit',
    '/api/reference/feature/feature-convert',
    '/api/reference/feature/arcgis-feature-query'
  ],
  metadata: [
    '/api/reference/metadata/metadata-query',
    '/api/reference/metadata/arcgis-metadata-query',
    '/api/reference/metadata/ogc-metadata-query',
    '/api/reference/metadata/vector-tile-metadata-query'
  ],
  catalog: [
    '/api/reference/catalog/document',
    '/api/reference/catalog/data-source',
    '/api/reference/catalog/system-library'
  ],
  analysis: [
    '/api/reference/analysis/stat-analysis',
    '/api/reference/analysis/workflow-analysis'
  ],
  overlay: ['/api/reference/overlay/overlay'],
  exhibition: ['/api/reference/exhibition/exhibition'],
  mixin: [
    '/components/mixin/manager',
    '/components/mixin/app-mixin',
    '/components/mixin/map-mixin',
    '/components/mixin/theme-mixin',
    '/components/mixin/theme-content-mixin',
    '/components/mixin/panel-mixin',
    '/components/mixin/widget-info-mixin',
    '/components/mixin/widget-mixin',
    '/components/mixin/exhibition-mixin',
    '/components/mixin/exhibition-controller-mixin'
  ],
  'common-components': [
    '/components/common/icon',
    '/components/common/button',
    '/components/common/placement',
    '/components/common/toolbar',
    '/components/common/window',
    '/components/common/group-tab',
    '/components/common/setting-form',
    '/components/common/card',
    '/components/common/checkbox',
    '/components/common/collapse-button',
    '/components/common/color-picker',
    '/components/common/color-picker-confirm',
    '/components/common/editable-table',
    '/components/common/file-preview',
    '/components/common/mask',
    '/components/common/popup-content',
    '/components/common/row-flex',
    '/components/common/tree-select',
    '/components/common/widget-routers'
  ],
  'map-components': [
    '/components/map/map-pro',
    '/components/map/draw-pro',
    '/components/map/marker-pro',
    '/components/map/marker-plotting',
    '/components/map/attribute-statistics',
    '/components/map/field-calculator',
    '/components/map/filter'
  ],
  'builder-components': [
    '/components/builder/app-loader',
    '/components/builder/app-builder',
    '/components/builder/map-container',
    '/components/builder/map-panel',
    '/components/builder/map-widget-indicator',
    '/components/builder/window-wrapper',
    '/components/builder/exhibition-panel'
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
