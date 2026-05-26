# 支付验证

## POST /payment/trc20/verify

验证 TRC20 USDT 交易状态。通过 TronScan API 查询交易信息并校验。

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| order_sn | string | ✅ | 订单号 |
| userAddress | string | ✅ | 付款方地址 |
| toAddress | string | ✅ | 收款方地址 |
| usdtContractAddress | string | ✅ | USDT 合约地址 |
| txHash | string | ✅ | 交易哈希 |

### 请求示例

```bash
curl -X POST https://your-domain.com/payment/trc20/verify \
  -H "Content-Type: application/json" \
  -d '{
    "order_sn": "XXXXXXXXXX",
    "userAddress": "TXxx...xxx",
    "toAddress": "TYyy...yyy",
    "usdtContractAddress": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "txHash": "abc123..."
  }'
```

### 响应

```json
{
  "success": true
}
```

---

## POST /api/create-crypto-order

创建加密货币支付订单。

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | ✅ | 订单标题 |
| price | string | ✅ | 订单金额 |
| email | string | - | 用户邮箱 |

### 响应

返回渲染后的支付页面 HTML。
