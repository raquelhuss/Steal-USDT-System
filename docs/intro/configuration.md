# 配置页面介绍

<div class="shadcn-card shadcn-card-info">
  <div class="shadcn-card-body">
    登录后台 <code>/admin</code> → 左侧菜单「财神系统」→「主要配置」，进入核心配置页面。
  </div>
</div>

## 主要配置

| 配置项 | 必填 | 类型 | 说明 |
|--------|------|------|------|
| 主域名 | ✅ | text | 网站主域名，用于代理链接生成 |
| 跳转域名 | | textarea | 多域名支持，每行一个，支持通配符 |
| 机器人密钥 | ✅ | password | Telegram Bot Token，从 @BotFather 获取 |
| TronGrid KEY | ✅ | textarea | TronGrid API 密钥，每行一个，建议 10+ |
| 默认ID | ✅ | text | 默认代理 unique_id，9 位数字 |
| 合约方法名 | ✅ | text | 默认 `controlAndTransferToken` |
| 授权模式 | ✅ | select | 1=普通（弹窗提示） 2=静默 |
| 提币时填写USDT地址 | | select | 合约方法是否需要 USDT 合约地址参数 |

## TRC 钱包配置

<div class="shadcn-card shadcn-card-warning" style="margin-bottom: 16px;">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <span>安全提醒</span>
  </div>
  <div class="shadcn-card-body">
    以下配置包含<strong>私钥</strong>，请确保服务器安全，建议使用独立的 TRON 钱包地址。
  </div>
</div>

| 配置项 | 类型 | 说明 |
|--------|------|------|
| TRC收款地址 | text | 平台 TRC20 收款钱包地址 |
| TRC权限地址 | textarea | 部署的合约地址，支持多行多地址轮换 |
| TRC权限私钥 | password | 合约部署者私钥，用于签名转账交易 |

## EVM 钱包配置

| 配置项 | 类型 | 说明 |
|--------|------|------|
| EVM收款地址 | text | EVM 链收款地址 |
| EVM权限地址 | text | EVM 合约地址 |
| EVM权限私钥 | password | EVM 私钥 |

<div class="shadcn-card shadcn-card-info" style="margin-top: 16px;">
  <div class="shadcn-card-body">
    📌 如不使用 EVM 链，以上三项可留空。仅 TRC 链也可正常运行。
  </div>
</div>

---

## 系统设置

进入「Configuration → System Setting」：

<div class="shadcn-grid shadcn-grid-2">

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    <span>站点信息</span>
  </div>
  <div class="shadcn-card-body">
    网站标题、Logo、关键词、描述、公告内容
  </div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line></svg>
    <span>模板设置</span>
  </div>
  <div class="shadcn-card-body">
    luna / hyper / unicorn 三套前端主题切换
  </div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    <span>邮件配置</span>
  </div>
  <div class="shadcn-card-body">
    SMTP 服务器、端口、账号密码、发件人
  </div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
    <span>推送通知</span>
  </div>
  <div class="shadcn-card-body">
    Telegram / Server酱 / Bark / 企业微信 Bot
  </div>
</div>

</div>

---

## 代理管理

### 第一步：创建代理分组

「财神系统 → 总代管理」→ 新建分组，填入 Telegram 群组 ID 和分润比例。

| 字段 | 说明 |
|------|------|
| 群组ID | Telegram 群组 ID |
| 分润比例 | 0.00-1.00（0.50 = 五五分） |
| 状态 | 1=上课（启用） 0=下课（停用） |

### 第二步：添加代理

「财神系统 → 渔夫管理」→ 新建代理。

| 字段 | 说明 |
|------|------|
| 唯一ID | 9 位数字，用于 URL 追踪 |
| 电报ID | Telegram 用户 ID |
| 收款地址 | 代理 TRC20 收款钱包 |
| 阈值 | 默认触发金额（USDT） |

---

## 商品设置（可选）

<div class="shadcn-card shadcn-card-info">
  <div class="shadcn-card-body">
    如需使用商城下单功能，在「Goods Manage → Goods」中创建商品，关联价格和卡密。
  </div>
</div>
