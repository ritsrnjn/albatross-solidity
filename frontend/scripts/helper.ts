import { contractId, AccountId } from "../src/config";
import hre, { ethers, viem } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const t = await hre.viem.deployContract("CarbonEmissionTracker", [], {});
  // console.log(`contract deployed at ${lock.address}`);

  const _t = await hre.viem.getContractAt(
    "CarbonEmissionTracker",
    contractId,
    {}
  );

  console.log(
    _t.address,
    t.address,
    await t.write.addEmission([BigInt(12)]),
    await t.write.addEmission([BigInt(13)]),
    await t.write.addEmission([BigInt(14)])
  );

  const tt = await t.read.viewEmissions([AccountId]);
  console.log(tt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
