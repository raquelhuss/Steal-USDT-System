# 部署方式

<div class="shadcn-card shadcn-card-info">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
    <span>推荐方案</span>
  </div>
  <div class="shadcn-card-body">
    推荐使用 <strong>Docker Compose</strong> 一键部署，零环境配置。
  </div>
</div>

## 方式一：Docker Compose（推荐）

### 前置要求

<div class="shadcn-grid shadcn-grid-2">

<div class="shadcn-requirement">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  <div>
    <strong>操作系统</strong>
    <span>Ubuntu 20.04+ / CentOS 7+ / Debian</span>
  </div>
</div>

<div class="shadcn-requirement">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
  <div>
    <strong>内存</strong>
    <span>最低 2GB，推荐 4GB+</span>
  </div>
</div>

<div class="shadcn-requirement">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
  <div>
    <strong>Docker</strong>
    <span>20.10+ / Docker Compose v2+</span>
  </div>
</div>

<div class="shadcn-requirement">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
  <div>
    <strong>端口</strong>
    <span>80 (Web) / 3306 (MySQL) / 6379 (Redis)</span>
  </div>
</div>

</div>

### 部署步骤

<div class="shadcn-steps">

<div class="shadcn-step">
  <div class="shadcn-step-number">1</div>
  <div class="shadcn-step-content">
    <strong>克隆项目</strong>
    <div class="shadcn-code-block">

```bash
git clone https://github.com/cnmbdb/Alure-du.git
cd Alure-du/主程序源码
```

    </div>
  </div>
</div>

<div class="shadcn-step">
  <div class="shadcn-step-number">2</div>
  <div class="shadcn-step-content">
    <strong>配置环境</strong>
    <div class="shadcn-code-block">

```bash
cp .env.example .env
nano .env
```

    </div>
    <p>编辑以下关键配置：</p>
    <div class="shadcn-table-wrapper">

| 变量 | 说明 |
|------|------|
| DB_HOST | MySQL 主机 |
| DB_DATABASE | 数据库名 |
| DB_USERNAME | 数据库用户 |
| DB_PASSWORD | 数据库密码 |
| REDIS_HOST | Redis 主机 |
| ADMIN_ROUTE_PREFIX | 后台路径 |

    </div>
  </div>
</div>

<div class="shadcn-step">
  <div class="shadcn-step-number">3</div>
  <div class="shadcn-step-content">
    <strong>启动服务</strong>
    <div class="shadcn-code-block">

```bash
docker-compose up -d
```

    </div>
    <div class="shadcn-card shadcn-card-warning" style="margin-top: 12px;">
      <div class="shadcn-card-body">
        💡 首次启动会拉取镜像并执行 composer install，约需 3-5 分钟。
      </div>
    </div>
  </div>
</div>

<div class="shadcn-step">
  <div class="shadcn-step-number">4</div>
  <div class="shadcn-step-content">
    <strong>导入数据库</strong>
    <div class="shadcn-code-block">

```bash
docker exec -i <mysql容器名> mysql -uroot -p < dujiaoka.sql
```

    </div>
  </div>
</div>

<div class="shadcn-step">
  <div class="shadcn-step-number">5</div>
  <div class="shadcn-step-content">
    <strong>启动机器人</strong>
    <div class="shadcn-code-block">

```bash
npm install
pm2 start bot.js --name du-bot
pm2 save
```

    </div>
  </div>
</div>

</div>

---

## 方式二：VPS 手动部署

<div class="shadcn-tabs">

### 安装依赖

<div class="shadcn-code-block">

```bash
# PHP 7.4 + 扩展
apt install php7.4 php7.4-fpm php7.4-mysql php7.4-redis \
  php7.4-mbstring php7.4-xml php7.4-curl php7.4-gd \
  php7.4-bcmath php7.4-fileinfo nginx

# MySQL 5.7 + Redis
apt install mysql-server redis-server

# Node.js 20
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
nvm install 20

# Composer
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

</div>

### 配置 Nginx

<div class="shadcn-code-block">

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/dujiaoka/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/run/php/php7.4-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

</div>

### 启动

<div class="shadcn-code-block">

```bash
cd /var/www/dujiaoka
composer install
chmod -R 777 storage bootstrap/cache
php artisan key:generate
systemctl restart nginx php7.4-fpm
```

</div>

</div>

---

## 方式三：Cloudflare Tunnel

<div class="shadcn-code-block">

```bash
# 安装
brew install cloudflared

# 登录
cloudflared tunnel login

# 创建并配置
cloudflared tunnel create du-aloure
cloudflared tunnel route dns du-aloure du.aloure-web.top

# 启动
cloudflared tunnel run --url http://localhost:8080
```

</div>

<div class="shadcn-card shadcn-card-info" style="margin-top: 24px;">
  <div class="shadcn-card-header">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
    <span>部署完成后</span>
  </div>
  <div class="shadcn-card-body">
    <p>访问 <code>http://your-domain.com/admin</code> 登录后台，前往「财神系统 → 主要配置」填入 TronGrid API Key、合约地址、私钥等信息，即可开始使用。</p>
  </div>
</div>
