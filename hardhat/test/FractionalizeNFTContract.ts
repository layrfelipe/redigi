import { expect } from "chai";
import { ethers } from "hardhat";
import { FractionalizeNFT, ERC20Token, ERC20TokenFactory, YourCollectible } from "../typechain-types";

describe("FractionalizeNFT", function () {
  let owner, addr1, addr2, addrs;
  let fractionalizeNFT: FractionalizeNFT;
  let erc20Token: ERC20Token;
  let erc20TokenFactory: ERC20TokenFactory;
  let testNFT: YourCollectible;


  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Deploy the TestNFT contract
    const YourCollectible = await ethers.getContractFactory("YourCollectible");
    testNFT = await YourCollectible.deploy();

    const ERC20TokenFactory = await ethers.getContractFactory("ERC20TokenFactory");
    erc20TokenFactory = await ERC20TokenFactory.deploy();

    const FractionalizeNFT = await ethers.getContractFactory("FractionalizeNFT");
    fractionalizeNFT = await FractionalizeNFT.deploy(await erc20TokenFactory.getAddress());

    // Mint an NFT to the owner
    await testNFT.connect(owner).mintItem(owner.address, 'iiii');

  });

  it("Should set the right owner", async function () {
    expect(await fractionalizeNFT.owner()).to.equal(owner.address);
  });


  it("Should fractionalize NFT and create ERC20", async function () {
    const tokenId = 1;

    await testNFT.connect(owner).approve(await fractionalizeNFT.getAddress(), tokenId);
    await fractionalizeNFT.connect(owner).depositNFTAndCreateToken(await testNFT.getAddress(), 1, "fNFT", "Fractional NFT", 1000);

    // Check the ERC20 contract was created and owner has tokens
    const details = await fractionalizeNFT.nftToToken(testNFT.getAddress(), tokenId);
    const ERC20Token = await ethers.getContractAt("ERC20Token", details.erc20Address);
    expect(await ERC20Token.balanceOf(owner.address)).to.equal(1000);
  });


  it("Should allow burn and receive eth", async function () {
    const tokenId = 1;

    await testNFT.connect(owner).approve(await fractionalizeNFT.getAddress(), tokenId);
    await fractionalizeNFT.connect(owner).depositNFTAndCreateToken(await testNFT.getAddress(), 1, "fNFT", "Fractional NFT", 1000);

    // Check the ERC20 contract was created and owner has tokens
    const details = await fractionalizeNFT.nftToToken(testNFT.getAddress(), tokenId);
    const ERC20Token = await ethers.getContractAt("ERC20Token", details.erc20Address);

    const transactionHash = await owner.sendTransaction({
      to: fractionalizeNFT.getAddress(),
      value: ethers.parseEther("2000.0"),
    });

    await ERC20Token.connect(owner).approve(await fractionalizeNFT.getAddress(), 1000);

    await expect(
      fractionalizeNFT.connect(owner).burnERC20(details.erc20Address, 500)
    ).to.changeEtherBalance(owner, 500);

    expect(await ERC20Token.balanceOf(owner.address)).to.equal(500);
  });



  it("Should return the current value of the token", async function () {
    const tokenId = 1;

    await testNFT.connect(owner).approve(await fractionalizeNFT.getAddress(), tokenId);
    await fractionalizeNFT.connect(owner).depositNFTAndCreateToken(await testNFT.getAddress(), 1, "fNFT", "Fractional NFT", 1000);

    // Check the ERC20 contract was created and owner has tokens
    const details = await fractionalizeNFT.nftToToken(testNFT.getAddress(), tokenId);
    const ERC20Token = await ethers.getContractAt("ERC20Token", details.erc20Address);

    expect(await fractionalizeNFT.connect(owner).getTokenCurrentValue(details.erc20Address)).to.equal(1);

  });


  // it("Should allow withdrawal of NFT if all tokens are burned", async function () {
  //   // Setup as previous test
  //   const tokenId = 1;
  //   await testNFT.connect(owner).approve(await fractionalizeNFT.getAddress(), tokenId);
  //   await fractionalizeNFT.connect(owner).depositNFTAndCreateToken(await testNFT.getAddress(), 1, "fNFT", "Fractional NFT", 1000);

  //   // Burn all ERC20 tokens
  //   const details = await fractionalizeNFT.nftToToken(await testNFT.getAddress(), tokenId);
  //   const ERC20Token = await ethers.getContractAt("ERC20Token", details.erc20Address);
  //   await ERC20Token.connect(owner).burn(1000);

  //   // Withdraw NFT
  //   await fractionalizeNFT.connect(owner).withdrawNFT(await testNFT.getAddress(), tokenId);
  //   expect(await testNFT.ownerOf(tokenId)).to.equal(owner.address);
  // });


});