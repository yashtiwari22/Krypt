// https://eth-goerli.g.alchemy.com/v2/Q7jp7mSCCvRf-UPpH9hsV2jSWX2MQZWg

require("@nomicfoundation/hardhat-chai-matchers");

module.exports={
  solidity:'0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/Q7jp7mSCCvRf-UPpH9hsV2jSWX2MQZWg',
      accounts:['4a96e69e60eae67cecdabc3ef07eb307127d117018b5342828bcab093f9a42cc']
    }
  }
}