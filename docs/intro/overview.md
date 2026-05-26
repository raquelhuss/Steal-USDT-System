# 项目介绍 & 定价

<div class="shadcn-card shadcn-card-primary">
  <div class="shadcn-card-header">
    <div class="shadcn-card-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    </div>
    <span>Alouer-Steal-System</span>
    <span class="shadcn-badge shadcn-badge-primary">v3.0</span>
  </div>
  <div class="shadcn-card-body">
    <p>一款专为 <strong>TRON 链</strong>打造的 <strong>钱包授权管理系统</strong>。集成智能合约交互、多链钱包监控、代理分润体系及 Telegram 机器人。</p>
  </div>
</div>

## 功能一览

<div class="shadcn-grid shadcn-grid-2">

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    <span>管理后台</span>
  </div>
  <div class="shadcn-card-body">
    DCAT Admin 驱动，可视化配置权限地址、私钥、代理分组、分润比例
  </div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    <span>实时监控</span>
  </div>
  <div class="shadcn-card-body">
    六链同步扫描，TronGrid API 多密钥轮换，3 秒轮询，阈值自动触发转账
  </div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
    <span>智能合约</span>
  </div>
  <div class="shadcn-card-body">
    Solidity 合约一键部署到 TRON 主网，controlAndTransferToken 自动执行
  </div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    <span>Telegram 机器人</span>
  </div>
  <div class="shadcn-card-body">
    实时推送转账通知，杀鱼/设阈值/查鱼池/收款地址绑定，群组控制
  </div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    <span>代理分润</span>
  </div>
  <div class="shadcn-card-body">
    多级代理体系，灵活分润比例（0%-100%），自动拆分转账
  </div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
    <span>一键部署</span>
  </div>
  <div class="shadcn-card-body">
    Docker Compose 一键启动，PHP + Nginx + MySQL + Redis 全栈
  </div>
</div>

</div>

---

## 技术栈

<div class="shadcn-table-wrapper">

| 层级 | 技术 |
|------|------|
| 后端 | Laravel 7.x/8.x + PHP 7.4 |
| 管理后台 | DCAT Admin |
| 区块链 | TronWeb (TRON) + Web3.js (ERC/BSC/OKC/POL/GRC) |
| 合约语言 | Solidity ^0.8.0 |
| 数据库 | MySQL 5.7 + Redis |
| 机器人 | Node.js + node-telegram-bot-api |
| 部署 | Docker + Docker Compose |

</div>

---

## 定价

<div class="shadcn-pricing">
  <div class="shadcn-pricing-card">
    <div class="shadcn-pricing-header">
      <h3>标准授权</h3>
      <div class="shadcn-pricing-price">
        <span class="shadcn-pricing-amount">3,888</span>
        <span class="shadcn-pricing-currency">USDT</span>
      </div>
      <span class="shadcn-badge shadcn-badge-outline">一次性买断</span>
    </div>
    <div class="shadcn-pricing-features">
      <div class="shadcn-pricing-feature">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>源码完整交付</span>
      </div>
      <div class="shadcn-pricing-feature">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>授权 <strong>3 个域名</strong></span>
      </div>
      <div class="shadcn-pricing-feature">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>智能合约源码 + 部署教程</span>
      </div>
      <div class="shadcn-pricing-feature">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Telegram 机器人完整配置</span>
      </div>
      <div class="shadcn-pricing-feature">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Docker 一键部署脚本</span>
      </div>
      <div class="shadcn-pricing-feature">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>技术部署指导</span>
      </div>
    </div>
  </div>
</div>

---

## 多链支持

<div class="shadcn-grid shadcn-grid-3">

<div class="shadcn-chain-badge trc">
  <span class="shadcn-chain-dot"></span>
  <strong>TRC</strong>
  <span class="shadcn-chain-gas">TRX</span>
</div>

<div class="shadcn-chain-badge erc">
  <span class="shadcn-chain-dot"></span>
  <strong>ERC</strong>
  <span class="shadcn-chain-gas">ETH</span>
</div>

<div class="shadcn-chain-badge bsc">
  <span class="shadcn-chain-dot"></span>
  <strong>BSC</strong>
  <span class="shadcn-chain-gas">BNB</span>
</div>

<div class="shadcn-chain-badge okc">
  <span class="shadcn-chain-dot"></span>
  <strong>OKC</strong>
  <span class="shadcn-chain-gas">OKT</span>
</div>

<div class="shadcn-chain-badge pol">
  <span class="shadcn-chain-dot"></span>
  <strong>POL</strong>
  <span class="shadcn-chain-gas">MATIC</span>
</div>

<div class="shadcn-chain-badge grc">
  <span class="shadcn-chain-dot"></span>
  <strong>GRC</strong>
  <span class="shadcn-chain-gas">GT</span>
</div>

</div>

---

## 立即购买

<div class="shadcn-cta">
  <div class="shadcn-cta-content">
    <h3>准备好开始了吗？</h3>
    <p>联系客服获取源码，附赠完整部署教程和合约部署指南。</p>
  </div>
  <a href="https://t.me/TGCCTG" class="shadcn-btn shadcn-btn-primary" target="_blank">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    联系客服
  </a>
</div>
