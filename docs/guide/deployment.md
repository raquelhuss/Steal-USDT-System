# 快速部署

## Docker 部署（推荐）

### 1. 克隆项目

```bash
git clone https://github.com/cnmbdb/Alure-du.git
cd Alure-du/主程序源码
```

### 2. 配置环境变量

```bash
cp .env.example .env
# 编辑 .env 配置数据库、Redis 等连接信息
```

### 3. 启动容器

```bash
docker-compose up -d
```

## 本地部署

### 环境要求

- PHP 7.4+
- MySQL 5.7+
- Redis
- Node.js 20+

### 安装步骤

```bash
# 安装 PHP 依赖
composer install

# 导入数据库
mysql -u root -p < dujiaoka.sql

# 配置 .env
cp .env.example .env
# 编辑数据库和 Redis 连接信息

# 生成应用密钥
php artisan key:generate

# 启动 Web 服务
php -S 0.0.0.0:8080 -t public/

# 安装 Node 依赖并启动机器人
npm install
pm2 start bot.js --name du-bot
```

## 后台访问

- 默认地址：`http://localhost:8080/admin`
- 默认账号：`admin`
- 密码需在数据库 `admin_users` 表中查看（bcrypt 加密）

## Cloudflare Tunnel 配置

```bash
# 安装 cloudflared
brew install cloudflared

# 登录
cloudflared tunnel login

# 创建隧道
cloudflared tunnel create <name>

# 配置 DNS
cloudflared tunnel route dns <tunnel-id> your-domain.com

# 启动
cloudflared tunnel run --url http://localhost:8080
```
