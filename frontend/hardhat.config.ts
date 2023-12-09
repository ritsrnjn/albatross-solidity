import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-viem";
import "@nomicfoundation/hardhat-toolbox-viem";

import { HardhatUserConfig } from "hardhat/config";
import { ACCOUNT_PRIVATE_KEY, ALCHEMY_API_KEY } from "./src/config";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
  },
};

export default config;
