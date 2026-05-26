# 项目介绍

## 概述

**Alouer-Steal-System** 是基于 dujiaoka（独角数卡）二次开发的 **TRON 链钱包授权管理系统**。

集成了多链钱包管理、智能合约交互、代理分润体系及 Telegram 机器人等功能。

## 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 后端框架 | Laravel 7.x/8.x + PHP 7.4 | Web 应用核心 |
| 管理后台 | DCAT Admin | 后台管理系统框架 |
| 区块链 | TronWeb + Web3.js | TRC/ERC/BSC/OKC/POL/GRC |
| 合约 | Solidity ^0.8.0 | TRON/EVM 智能合约 |
| 数据库 | MySQL 5.7 + Redis | 持久化 + 缓存/队列 |
| 机器人 | node-telegram-bot-api | Telegram Bot 服务 |
| 容器化 | Docker + Docker Compose | 一键部署 |

## 核心功能

### TRON 钱包管理
- 钱包地址批量管理（鱼苗系统）
- 实时 USDT 和 TRX 余额查询
- 自动阈值触发转账
- 授权状态追踪

### 智能合约
- Solidity 合约 `controlAndTransferToken`
- 一键部署到 TRON 主网
- TronGrid API 多密钥轮换
- 合约方法灵活配置

### 代理分润
- 渔夫/代理注册管理
- 代理分组与分润比例（0.00 - 1.00）
- Telegram 群组集成
- 收款地址绑定

### Telegram 机器人
- 实时推送转账通知
- 命令：杀鱼 / 设阈值 / 查看鱼池 / 绑定收款地址
- 群组上课/下课模式

## 部署要求

- PHP 7.4+
- MySQL 5.7+
- Redis
- Node.js 20+
- TRON 链 TronGrid API Key
