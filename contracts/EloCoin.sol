// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Learn more about the ERC20 implementation 
// on OpenZeppelin docs: https://docs.openzeppelin.com/contracts/4.x/erc20
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EloCoin is ERC20 {
    constructor(
      address payable safeAddress
    ) ERC20("Elo Coin", "ELO") {
      _mint(safeAddress, 1000 * 10 ** 18);
    }
}