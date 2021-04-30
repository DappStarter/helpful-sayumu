require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'half clock bright smooth fine birth snow connect install hill equal genuine'; 
let testAccounts = [
"0xa905405dfb3ef8551cd28f518f0d41f15502240a82125df7f583e590ceb30cc1",
"0x388ad971384e6ceb47d11b984dad152a8c6c4adb916957fe6ef41cc9b6344da4",
"0x55da365b766d46ca06b45ed1e049edf0b57693a95c0a13eadd84f529265d8ce0",
"0x5d5c70a9ddf3267bfe393e429fd5931db5d3c9e820c5b64d44b6f93611cd0c0b",
"0x217de24796d319ea057cdec9d03bc9d07a6ed09cf04cc5237d9c7755c821520e",
"0xe2e8a1f99de44d234130a0bf3c4604166faf95d647ae8547b55fe2a75624cece",
"0xac6a6b7d541510298600698cc34f9afa92f0f05148e9dac7f78915180a14de85",
"0xcbc6e1c6fcfb1b6a52c17404f1e07672bc2abd5237980db5a9399b99ff428f27",
"0xc1aacf5a0f5af6edb78abc8eaed2e52a51e744e73a68e8470b11ec9462f1d44f",
"0xe4356654dc1d9fa0a31ef2f596ed73d667e230f3897b53f3d2781b4e9c5a36cf"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


