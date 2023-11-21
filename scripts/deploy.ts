import { ethers } from "hardhat";


 // @TODO: modular deployment

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.parseEther("0.001");

  // const lock = await ethers.deployContract("Lock", [unlockTime], {
  //   value: lockedAmount,
  // });

  // await lock.waitForDeployment();

  // console.log(
  //   `Lock with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  // );

  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");


  // await greeter.waitForDeployment();
  // console.log("Greeter deployed to:", await greeter.getAddress())

  const Horoscope = await ethers.getContractFactory("HoroscopeNFT");
  console.log("Deploying Contract...");
  const horoscope = await Horoscope.deploy();
  const txHash = horoscope.deploymentTransaction()?.hash;
  if (txHash) {
  //   const txReceipt = await ethers.provider.waitForTransaction(txHash);
  //   console.log("Contract deployed to address:", txReceipt?.contractAddress);


    await horoscope.waitForDeployment();
    console.log("Greeter deployed to:", await horoscope.getAddress())
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
