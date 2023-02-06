import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths:{
    artifacts:'./web-app/artifacts'
  },
  defaultNetwork: 'hardhat',
    networks: {
      hardhat: {
        chainId: 1337
      },
      hyperspace: {
        chainId: 3141,
        url: "https://api.hyperspace.node.glif.io/rpc/v1",
        accounts: [/*private key*/],
      },
    }
};

export default config;
