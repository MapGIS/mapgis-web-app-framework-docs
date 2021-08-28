const { getNavbarByCategory } = require('./navbar')
const { getSidebarByCategory } = require('./sidebar')

module.exports = {
  title: 'MapGIS Web App Framework',
  base: '/mapgis-web-app-framework-docs/',
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: 'mapgis,waf,webgis,开源,免费,Web应用框架,应用框架'
      }
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    repo: 'mapgis/mapgis-web-app-framework',
    docsRepo: 'mapgis/mapgis-web-app-framework-docs',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    },
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [],
        sidebar: {}
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
          }
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: 'API',
            link: '/zh/api/reference/manager'
          },
          {
            text: '组件',
            link: '/zh/components/common/icon'
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '入门',
              children: getSidebarByCategory('introduction', 'zh')
            },
            {
              title: '开发',
              children: getSidebarByCategory('development', 'zh')
            },
            {
              title: '进阶',
              children: getSidebarByCategory('advanced', 'zh')
            },
            {
              title: '其它',
              children: getSidebarByCategory('other', 'zh')
            }
          ],
          '/zh/api/': [
            {
              title: '工具',
              children: getSidebarByCategory('utils', 'zh')
            },
            {
              title: '对象',
              children: getSidebarByCategory('objects', 'zh')
            },
            {
              title: '文档',
              children: getSidebarByCategory('document', 'zh')
            },
            {
              title: '要素',
              children: getSidebarByCategory('feature', 'zh')
            },
            {
              title: '元数据',
              children: getSidebarByCategory('metadata', 'zh')
            },
            {
              title: '分析',
              children: getSidebarByCategory('analysis', 'zh')
            },
            {
              title: '覆盖物',
              children: getSidebarByCategory('overlay', 'zh')
            },
            {
              title: '展示',
              children: getSidebarByCategory('exhibition', 'zh')
            },
            {
              title: '搭建',
              children: getSidebarByCategory('builder', 'zh')
            }
          ],
          '/zh/components/': [
            {
              title: '常规组件',
              children: getSidebarByCategory('common-components', 'zh')
            },
            {
              title: '地图组件',
              children: getSidebarByCategory('map-components', 'zh')
            },
            {
              title: '搭建组件',
              children: getSidebarByCategory('builder-components', 'zh')
            }
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      description: 'Web App Framework'
    },
    '/zh/': {
      lang: 'zh-CN',
      description: 'Web应用框架'
    }
  },
  plugins: [
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-back-to-top',
    'vuepress-plugin-viewer'
  ]
}
