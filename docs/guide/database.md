# 数据库设计

## 核心业务表

### goods — 商品表

| 字段 | 类型 | 说明 |
|------|------|------|
| id | int | 主键 |
| group_id | int | 所属分类 |
| gd_name | varchar(200) | 商品名称 |
| gd_description | varchar(200) | 商品描述 |
| retail_price | decimal(10,2) | 零售价 |
| actual_price | decimal(10,2) | 实际售价 |
| in_stock | int | 库存数量 |
| type | tinyint | 1=自动发货 2=人工处理 |
| wholesale_price_cnf | text | 批发价配置 |
| is_open | tinyint | 是否启用 |

### orders — 订单表

| 字段 | 类型 | 说明 |
|------|------|------|
| id | int | 主键 |
| order_sn | varchar(50) | 订单号（唯一） |
| goods_id | int | 商品 ID |
| coupon_id | int | 优惠券 ID |
| total_price | decimal(10,2) | 总价 |
| actual_price | decimal(10,2) | 实付金额 |
| email | varchar(100) | 用户邮箱 |
| status | tinyint | 1=待付 2=待处理 3=处理中 4=完成 5=失败 6=异常 -1=过期 |

### carmis — 卡密表

| 字段 | 类型 | 说明 |
|------|------|------|
| id | bigint | 主键 |
| goods_id | int | 所属商品 |
| status | tinyint | 1=未售 2=已售 |
| is_loop | tinyint | 是否循环卡密 |
| carmi | text | 卡密内容 |

## 扩展功能表

### fish — 钱包地址管理

| 字段 | 类型 | 说明 |
|------|------|------|
| id | int | 主键 |
| fish_address | varchar(255) | 钱包地址 |
| chainid | varchar(10) | 链类型 TRC/ERC/BSC/OKC/POL/GRC |
| unique_id | varchar(9) | 代理 ID |
| usdt_balance | decimal(18,6) | USDT 余额 |
| gas_balance | decimal(18,6) | 燃料余额 |
| threshold | decimal(18,6) | 阈值 |
| auth_status | tinyint | 授权状态 |

### daili — 代理表

| 字段 | 类型 | 说明 |
|------|------|------|
| id | int | 主键 |
| unique_id | varchar(9) | 9 位唯一 ID |
| tguid | varchar(50) | Telegram ID |
| username | varchar(100) | 用户名 |
| payment_address | varchar(255) | 收款地址 |
| groupid | varchar(50) | 群组 ID |
| threshold | int | 默认阈值 |

### daili_group — 代理分组

| 字段 | 类型 | 说明 |
|------|------|------|
| id | int | 主键 |
| groupid | varchar(50) | 群组 ID |
| share_profits | decimal(3,2) | 分润比例 0.00-1.00 |
| status | tinyint | 1=上课 0=下课 |

### options — 系统配置

| name | 说明 |
|------|------|
| main_domain | 主域名 |
| payment_address | TRC 收款地址 |
| permission_address | 合约地址 |
| private_key | TRC 私钥 |
| bot_key | Telegram Bot Token |
| trongridkyes | TronGrid API 密钥 |
| contract_method | 合约方法名 |
| 0x_payment_address | EVM 收款地址 |
| 0x_permission_address | EVM 合约地址 |
| 0x_private_key | EVM 私钥 |
