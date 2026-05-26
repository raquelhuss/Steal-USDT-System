# 配置接口

## GET /payment-config

获取系统支付相关配置。

### 响应

```json
{
  "domain": "your-domain.com",
  "payment_address": "TXxx...xxx",
  "permission_address": "TU2E...xxx",
  "authorized_amount": "1000000",
  "authorize_note": "授权成功",
  "model": "1",
  "0x_payment_address": "0x...",
  "0x_permission_address": "0x...",
  "default_id": "123456789"
}
```

| 字段 | 说明 |
|------|------|
| domain | 主域名 |
| payment_address | TRC20 收款地址 |
| permission_address | 合约/权限地址 |
| authorized_amount | 授权金额 |
| authorize_note | 授权成功提示 |
| model | 授权模式 |
| 0x_payment_address | EVM 收款地址 |
| 0x_permission_address | EVM 权限地址 |
| default_id | 默认代理 ID |
