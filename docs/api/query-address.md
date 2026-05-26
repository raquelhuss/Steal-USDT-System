# 钱包地址查询

## POST /query-address

查询指定钱包地址是否存在于鱼苗库中。

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| fish_address | string | ✅ | 钱包地址 |
| chainid | string | ✅ | 链类型：TRC/ERC/BSC/OKC/POL/GRC |

### 请求示例

```bash
curl -X POST https://your-domain.com/query-address \
  -H "Content-Type: application/json" \
  -d '{
    "fish_address": "TXxx...xxx",
    "chainid": "TRC"
  }'
```

### 响应

```json
{
  "result": "yes"
}
```

| result | 说明 |
|--------|------|
| yes | 地址存在且已授权 |
| no | 地址不存在或未授权 |
