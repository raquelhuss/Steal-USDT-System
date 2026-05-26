# 支付流程

## 订单生命周期

```
下单 → 选择支付 → 跳转网关 → 支付回调 → 发货
```

## 详细流程

### 1. 创建订单

```
用户浏览商品 → 选择数量/填写邮箱 → 通过验证
  → POST /create-order → 创建订单（状态：待支付）
```

### 2. 支付跳转

```
订单详情页 → 选择支付方式 → /pay-gateway/{handler}/{payway}/{orderSN}
  → 重定向到支付网关
```

### 3. 支付回调

```
用户完成支付 → 网关 notify_url 回调
  → 验证签名 → 更新订单状态 → 触发发货
```

### 4. 自动发货

```
订单完成 → 查询卡密库存 → 标记已售
  → 发送邮件给用户 → 推送通知
```

### 5. 手动处理

```
订单待处理 → 发送通知给管理员
  → 管理员手动处理 → 标记完成
```

## 支付网关

| 网关 | 支付方式 | 处理器 |
|------|----------|--------|
| Epusdt | USDT/TRC20 | EpusdtController |
| TRC20 直付 | USDT/TRC20 | TrcPayController |
| Coinbase | 加密货币 | CoinbaseController |
| Stripe | 微信/支付宝/信用卡 | StripeController |
| PayPal | 账户支付 | PaypalPayController |
| 支付宝 | 当面付/PC | AlipayController |
| 微信 | 扫码支付 | WepayController |
| 易支付 | 支付宝/微信/QQ | YipayController |
| 码支付 | QQ/微信/支付宝 | MapayController |
| Paysapi | 聚合支付 | PaysapiController |
| Payjs | 微信支付 | PayjsController |
| V免签 | 微信个人 | VpayController |

## 订单过期机制

订单创建后若在规定时间内（默认 30 分钟）未支付，自动标记为过期并退还优惠券。
