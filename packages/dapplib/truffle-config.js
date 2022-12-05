require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note shift promote include entire swallow taste'; 
let testAccounts = [
"0x0068cf7da33b5cfe5d1bc1470bbbd794f67b667da5bd43f8835159ecce9f8ee9",
"0x0d39f0255aac84d1ea91d6356f22a9fcfdcf8b963789a1e381a466577c22b164",
"0x2e4c2c8bdc63e25c592b7adaa0101e86b1b0951b6777761f031922c6b693b8e8",
"0x90aa906eef4a27167d1ad6dab64d19d793983c7a58a80c60ecf6789bd322e16d",
"0x3ed3242035bab1bb11e83cbdab177ebdaa08a6ff8403db625ac44c12bad29688",
"0x4ab3a85cd37edeb9f28e0af282d6e03cd315972c87d6983b86eb82454f4a0a2d",
"0x4c7b6fa4e31eb4a9fb5b4971341ac4203841743343dfe0170e9ca6c47d52f367",
"0xc31fcbf6e996444589f5c04462a29963144f3b30ddf2afd47c3f93c3c3f12e1f",
"0x2f7d4a5bea66a66d8d64c95e5886730399811de070972d362b353481a006f95f",
"0x04333870a28cb5aff518267e26e261a48999b8316473633a75195cfc3f0ca480"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

