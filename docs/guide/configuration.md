# 配置说明

## 环境变量 (.env)

```bash
APP_NAME=Alouer系统
APP_ENV=local
APP_DEBUG=false
APP_URL=https://your-domain.com

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
REDIS_PASSWORD=

# 缓存与队列
CACHE_DRIVER=redis
QUEUE_CONNECTION=redis

# 后台
DUJIAO_ADMIN_LANGUAGE=zh_CN
ADMIN_ROUTE_PREFIX=/admin
ADMIN_HTTPS=false
```

## 后台配置 (options 表)

通过 `/admin/options` 管理面板配置：

| 配置项 | 必填 | 说明 |
|--------|------|------|
| 机器人密钥 | ✅ | Telegram Bot API Token |
| TronGrid KEY | ✅ | TronGrid API 密钥（每行一个） |
| 主域名 | ✅ | 网站主域名 |
| TRC收款地址 | ✅ | 平台 TRC20 收款钱包 |
| TRC权限地址 | ✅ | 部署的合约地址 |
| TRC权限私钥 | ✅ | 合约部署者私钥 |
| EVM权限地址 | - | EVM 合约地址 |
| EVM收款地址 | - | EVM 收款地址 |
| EVM权限私钥 | - | EVM 私钥 |
| 合约方法名 | ✅ | 默认 controlAndTransferToken |
| 默认ID | ✅ | 默认代理 ID |
| 跳转域名 | - | 多域名支持（每行一个） |
| 授权模式 | ✅ | 1=普通 2=静默 |

## 系统设置

通过 `/admin/system-setting` 配置：

- 网站标题、Logo、描述
- 模板选择 (luna/hyper/unicorn)
- 订单过期时间
- 邮件通知配置
- 支付方式配置
- Telegram/Server酱/Bark 推送配置
