var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider("daring box glory poem math flip world public silly loan edge nice", "https://rinkeby.infura.io/1gI9DT8OOfMzWzoF21xH")
      },
      network_id: 3
    },
    development:{
      host:"127.0.0.1",
      port:8545,
      network_id:1
    }
  }
};
