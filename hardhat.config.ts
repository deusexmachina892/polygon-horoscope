require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const {PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
   defaultNetwork: "mumbai",
   networks: {
     hardhat: {},
     mumbai: {
       url: "https://rpc.ankr.com/polygon_mumbai",
       accounts: [`0x${PRIVATE_KEY}`],
     },
   },
};

export default config;
