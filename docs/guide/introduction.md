# 项目介绍

## 概述

Alouer System 是基于 **dujiaoka（独角数卡）** 二次开发的虚拟商品自动发卡电商平台。

集成了区块链钱包管理、代理分润、Telegram 机器人等功能，用于统一管理系统的开发与测试。

## 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 后端框架 | Laravel 7.x/8.x + PHP 7.4 | Web 应用核心 |
| 管理后台 | DCAT Admin | 后台管理系统框架 |
| 前端主题 | luna / hyper / unicorn | 三套 Blade 模板 |
| 数据库 | MySQL 5.7 + Redis | 持久化 + 缓存/队列 |
| Web 服务器 | Nginx + PHP-FPM | Docker 容器化部署 |
| 区块链 | TronWeb + Web3.js | TRC/ERC/BSC/OKC/POL/GRC 多链 |
| 机器人 | node-telegram-bot-api | Telegram Bot 服务 |
| 容器化 | Docker + Docker Compose | 一键部署 |

## 核心功能

### 电商系统
- 商品管理（商品分类、自动/手动发货、库存管理）
- 卡密系统（批量导入、自动发放、循环卡密）
- 订单系统（订单状态流转、过期处理、优惠券退还）
- 优惠券（一次性/多次使用、商品关联）

### 支付系统
支持 13 种支付网关，包括 USDT/TRC20 原生支付验证。

### 钱包管理
- 多链钱包地址管理（鱼苗系统）
- 实时余额查询与监控
- 浏览播报记录
- 授权状态追踪

### 代理体系
- 渔夫/代理注册与管理
- 代理分组与分润比例配置
- Telegram 群组集成
- 收款地址绑定

### 机器人系统
- Telegram Bot 命令交互
- 自动分润转账通知
- 区块链实时监控推送

## 部署要求

- PHP 7.4+
- MySQL 5.7+
- Redis
- Node.js 20+（机器人服务）
- Composer
- Docker（可选）

## 许可证

MIT License
