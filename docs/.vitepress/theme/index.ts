import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-after': () => h('div', { class: 'telegram-pill' }, [
        h('a', { href: 'https://t.me/TGCCTG', target: '_blank' }, [
          h('img', { src: '/telegram.svg', width: '18', height: '18', alt: 'Telegram' }),
          h('span', 'Telegram')
        ])
      ])
    })
  }
}
