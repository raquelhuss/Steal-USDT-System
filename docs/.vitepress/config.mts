import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Alouer-Steal-System',
  description: 'TRON 链钱包授权管理系统 - 多链钱包监控、智能合约交互、Telegram 机器人',
  lang: 'zh-CN',
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0a0a0a' }],
  ],

  themeConfig: {
    logo: false,
    siteTitle: 'Alouer-Steal',
    appearance: 'dark',

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

    darkModeSwitchLabel: '主题切换',
    lightModeSwitchTitle: '切换到亮色模式',
    darkModeSwitchTitle: '切换到暗色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '语言',

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
