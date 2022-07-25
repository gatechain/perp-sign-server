const gatewallet = require('gatewallet');
const circomlib = require('circomlib');

const signer = {
    getAddress: function () {
        return Promise.resolve('address')
    }
}

const config = {
    CONTRACT_ADDRESSES: {
        GateChain: '0x609d24024F3DFe4cB5021A2686b8B67c3db6A0dd',
    },
    contractLeftMap: {
        BTC: 0,
        ETH: 1
    },
    contractRightMap: {
        USDC: 0,
        USDT: 1,
        USD: 2
    }
}

async function test() {
    var wallet = await gatewallet.default.createWalletFromGateChainAccount(signer, config, "5c5582c81787d2e838106cb7262f1d423f8375f993435312f27a00234d852c97");

    const tx = {
        contract: "BTC_USDT",
        price: "20000",
        user_id: 9,
        size: 1
    }
    const type = 'order'

    // method1
    // const hashMessage = wallet.gateWallet.getHashMessage(tx, type)
    // config.log(hashMessage.toString())
    const signature = wallet.gateWallet.getSignature(tx, type)
    console.log(signature.toString())


    // method2
    // const hashMessage = wallet.gateWallet.getHashMessage(tx, type);
    // console.log("hashMessage: " + hashMessage)
    // const signature1 = circomlib.eddsa.signPoseidon("5c5582c81787d2e838106cb7262f1d423f8375f993435312f27a00234d852c97", hashMessage)
    // console.log("signature: " + signature1)
    // const packedSignature = circomlib.eddsa.packSignature(signature1)
    // const result =  '0x' + packedSignature.toString('hex')
    // console.log(result)
}

test()