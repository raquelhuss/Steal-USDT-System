# 版本 / 隐私 / 法律

## 版本信息

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    <span>当前版本</span>
    <span class="shadcn-badge shadcn-badge-primary">v3.0.0</span>
  </div>
  <div class="shadcn-card-body">
    <p>基于 dujiaoka (独角数卡) 开源项目二次开发，集成 TRON 链钱包管理模块。</p>
  </div>
</div>

<div class="shadcn-table-wrapper" style="margin-top: 24px;">

| 组件 | 版本 | 说明 |
|------|------|------|
| 核心框架 | Laravel 7.x/8.x | PHP 7.4 运行环境 |
| 管理后台 | DCAT Admin 2.x | Laravel Admin 框架 |
| 合约语言 | Solidity ^0.8.0 | TRON/EVM 智能合约 |
| TronWeb | v6.0+ | TRON 链交互 SDK |
| Web3.js | v4.16+ | EVM 链交互 SDK |
| MySQL | 5.7 | 数据持久化 |
| Redis | 6.x+ | 缓存与队列 |
| Node.js | 20+ | 机器人运行环境 |
| Docker | 20.10+ | 容器化部署 |

</div>

---

## 更新日志

<div class="shadcn-timeline">

<div class="shadcn-timeline-item">
  <div class="shadcn-timeline-dot"></div>
  <div class="shadcn-timeline-content">
    <div class="shadcn-timeline-date">2026-05</div>
    <strong>v3.0.0</strong>
    <p>移除第三方 API 依赖（tronweb.mom / rpc.chain-evm.com），改为本地签名广播交易。项目更名为 Alouer-Steal-System。</p>
  </div>
</div>

<div class="shadcn-timeline-item">
  <div class="shadcn-timeline-dot"></div>
  <div class="shadcn-timeline-content">
    <div class="shadcn-timeline-date">2025-03</div>
    <strong>v2.0.0</strong>
    <p>新增多链支持（ERC/BSC/OKC/POL/GRC）。鱼苗系统重构，代理分润体系完善。</p>
  </div>
</div>

<div class="shadcn-timeline-item">
  <div class="shadcn-timeline-dot"></div>
  <div class="shadcn-timeline-content">
    <div class="shadcn-timeline-date">2021-05</div>
    <strong>v1.0.0</strong>
    <p>基于 dujiaoka 初始版本，集成 TRON 链基本功能。</p>
  </div>
</div>

</div>

---

## 隐私声明

<div class="shadcn-card shadcn-card-info">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    <span>数据处理说明</span>
  </div>
  <div class="shadcn-card-body">

### 收集的数据

| 数据类型 | 用途 | 存储位置 |
|----------|------|----------|
| 钱包地址 | 鱼苗管理 | MySQL `fish` 表 |
| Telegram ID | 代理身份绑定 | MySQL `daili` 表 |
| 交易哈希 | 转账记录 | 链上公开数据 |
| 邮箱 | 订单通知（可选） | MySQL `orders` 表 |

### 不收集的数据

- 我们不存储任何用户的私钥或助记词
- 不记录 IP 地址（浏览播报限流使用 Redis 临时存储，10 分钟后过期）
- 不追踪浏览器指纹

### 数据安全

- 管理后台私钥字段使用密码输入框，前端隐藏显示
- 建议使用独立 TRON 钱包作为权限地址，与主钱包隔离
- 数据库密码、Redis 密码、API Key 存储在 `.env` 文件中，请勿泄露

</div>
</div>

---

## 法律免责声明

<div class="shadcn-card shadcn-card-danger" id="legal-disclaimer">

<div class="shadcn-card-header">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  <span>重要声明</span>
</div>
<div class="shadcn-card-body">

### ⚠️ 使用限制

本项目为**技术研究和学习用途**开发。使用者须自行承担以下责任：

1. **授权合法性** — 使用者必须确保获得钱包所有者的明确授权，方可调用合约的 `transferFrom` 方法
2. **法律合规** — 使用者须遵守所在国家/地区的法律法规。未经授权的资金划转可能构成违法行为
3. **责任自负** — 开发者不对使用者的任何行为承担责任，包括但不限于：
   - 未授权访问他人数字资产
   - 违反反洗钱法规
   - 欺诈或盗窃行为

### 📜 许可协议

- 基础项目 dujiaoka：MIT License
- 合约代码 heyue.sol：MIT License
- 本系统二次开发部分：MIT License

### 🔗 开源声明

本项目的合约代码和服务端代码均开源：
- [GitHub - 主程序](https://github.com/cnmbdb/Alure-du)
- [GitHub - VitePress 文档](https://github.com/raquelhuss/Steal-USDT-System)

</div>
</div>

---

## 联系方式

<div class="shadcn-cta">
  <div class="shadcn-cta-content">
    <h3>技术咨询 & 购买授权</h3>
    <p>联系客服获取源码授权、部署指导、合约部署协助。</p>
  </div>
  <a href="https://t.me/TGCCTG" class="shadcn-btn shadcn-btn-primary" target="_blank">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    Telegram 联系客服
  </a>
</div>
