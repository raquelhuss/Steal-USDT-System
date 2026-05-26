import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h('div', { class: 'telegram-pill' }, [
        h('a', { href: 'https://t.me/TGCCTG', target: '_blank' }, [
          h('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', innerHTML: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>' }),
          h('span', 'Telegram')
        ])
      ])
    })
  }
}
