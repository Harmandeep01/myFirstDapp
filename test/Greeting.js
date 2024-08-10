const { expect, assert } = require("chai");
const { ethers } = require("hardhat");


  describe("Greeting", async function () {
      let data;
      beforeEach(async() => {
        const Greeting = await ethers.getContractFactory("Greeting");
        const greeting = await Greeting.deploy("Hey");
        await greeting.deployed();
        data = greeting;
      })
      
      it("Should return the new value after changing", async function () {
       assert.equal(await data.greet(), "Hey");
      });

      it("Should assign the new value to greeting variable!", async function(){
        const changeGreetVar = await data.changeGreet("Hi");
        await changeGreetVar.wait();
        assert.equal(await data.greet(), "Hi");
      })
    });