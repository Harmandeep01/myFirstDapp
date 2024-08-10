// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";
contract Greeting {
    string greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns(string memory) {
        return greeting;
    }

    function changeGreet(string memory _greeting) public payable  {
        console.log("The greeting will change from %s to %s", greeting, _greeting);
        greeting = _greeting;
    }
}