<script setup>
import { VPButton } from 'vitepress/theme'

const features = [
  {
    icon: 'shopping',
    title: 'TRON 钱包授权',
    desc: 'TRC20 USDT 一键授权管理，支持批量钱包地址录入，实时余额监控，自动阈值触发转账。',
    badges: ['TRC20', '自动触发']
  },
  {
    icon: 'payment',
    title: '智能合约交互',
    desc: '部署即用的 Solidity 合约，controlAndTransferToken 自动化执行，支持多合约地址轮换。',
    badges: ['Solidity', 'transferFrom']
  },
  {
    icon: 'blockchain',
    title: '多链实时监控',
    desc: 'TRC/ERC/BSC/OKC/POL/GRC 六链同步扫描，TronGrid API 多密钥轮换，3 秒轮询不遗漏。',
    badges: ['六链', '3s 轮询']
  },
  {
    icon: 'bot',
    title: 'Telegram 机器人',
    desc: '代理管理体系，实时推送通知。杀鱼 / 设阈值 / 查鱼池 / 收款地址绑定，群组上课下课。',
    badges: ['Bot API', '分润通知']
  },
  {
    icon: 'dashboard',
    title: '管理后台',
    desc: 'DCAT Admin 驱动的可视化面板，权限地址/私钥配置、代理分组、分润比例一站式管理。',
    badges: ['DCAT', '可视化']
  },
  {
    icon: 'deploy',
    title: 'Docker 一键部署',
    desc: 'Docker Compose 快速启动全栈服务，PHP 7.4 + Nginx + MySQL 5.7 + Redis 开箱即用。',
    badges: ['Docker', '全栈']
  }
]
</script>

<template>
  <div class="shadcn-features">
    <div class="shadcn-features-grid">
      <div v-for="f in features" :key="f.title" class="shadcn-feature-card">
        <div class="shadcn-feature-icon">
          <img :src="`/icons/${f.icon}.svg`" :alt="f.title" width="22" height="22" />
        </div>
        <div class="shadcn-feature-content">
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
          <div class="shadcn-feature-badges">
            <span v-for="b in f.badges" :key="b" class="shadcn-feature-badge">{{ b }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadcn-features {
  margin: 48px auto 32px;
  max-width: 1152px;
  padding: 0 24px;
}
.shadcn-features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 960px) {
  .shadcn-features-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .shadcn-features-grid { grid-template-columns: 1fr; }
}
.shadcn-feature-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s, background 0.2s;
}
.shadcn-feature-card:hover {
  border-color: var(--vp-c-border-hard);
  background: var(--vp-c-bg-mute);
}
.shadcn-feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--vp-c-border);
}
.shadcn-feature-content h3 {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 8px;
  border: none;
  padding: 0;
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
}
.shadcn-feature-content p {
  font-size: 13px;
  color: var(--vp-c-text-3);
  line-height: 1.65;
  margin: 0 0 14px;
}
.shadcn-feature-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.shadcn-feature-badge {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-border);
  line-height: 1.4;
}
</style>
