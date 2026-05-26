# 代理接口

## POST /agent-payment-address

获取代理绑定的收款地址。

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| unique_id | string | ✅ | 代理 9 位唯一 ID |

### 请求示例

```bash
curl -X POST https://your-domain.com/agent-payment-address \
  -H "Content-Type: application/json" \
  -d '{"unique_id": "123456789"}'
```

### 响应

```json
{
  "status": "TXxx...xxx"
}
```

| status | 说明 |
|--------|------|
| 钱包地址 | 代理已设置收款地址 |
| no | 代理未设置或无此代理 |

---

## POST /api/get_daili_info

获取代理基本信息。

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| unique_id | string | ✅ | 代理 9 位唯一 ID |

### 响应

```json
{
  "username": "agent_name",
  "unique_id": "123456789"
}
```
