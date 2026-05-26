# API 接口概览

## 接口列表

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/query-address` | 查询钱包地址 |
| POST | `/agent-payment-address` | 获取代理收款地址 |
| POST | `/browse-broadcast` | 钱包浏览播报 |
| POST | `/api/get_daili_info` | 获取代理信息 |
| POST | `/api/create-crypto-order` | 创建加密支付订单 |
| GET | `/payment-config` | 获取支付配置 |
| POST | `/payment/trc20/verify` | 验证 TRC20 交易 |
| POST | `/custom-payment` | 自定义模板下单 |

## 通用说明

- 接口地址：`https://your-domain.com`
- 请求格式：`application/json`（部分 POST）/ `application/x-www-form-urlencoded`
- 响应格式：`application/json`

## 错误处理

```json
{
  "code": 404,
  "msg": "拒绝访问"
}
```

所有 API 返回统一的 JSON 格式。
