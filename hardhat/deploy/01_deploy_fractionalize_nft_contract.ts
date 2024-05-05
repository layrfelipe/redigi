import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployFractionalizeNFT: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ERC20TokenFactory", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  const erc20TokenFactory = await hre.ethers.getContract<Contract>("ERC20TokenFactory", deployer);

  await deploy("FractionalizeNFT", {
    from: deployer,
    args: [await erc20TokenFactory.getAddress()],
    log: true,
    autoMine: true,
  });  

  // Get the deployed contract to interact with it after deploying.
  const fractionalizeNFT = await hre.ethers.getContract<Contract>("FractionalizeNFT", deployer);
//   console.log("👋 Initial greeting:", await yourContract.greeting());
};

export default deployFractionalizeNFT;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployFractionalizeNFT.tags = ["FractionalizeNFT"];
