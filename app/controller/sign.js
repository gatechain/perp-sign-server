'use strict';
const gatewallet = require('gatewallet');

/**
 * @controller
 */
const Controller = require('egg').Controller;

const signer = {
    getAddress: function () {
        return Promise.resolve('address')
    }
}

class SignController extends Controller {

    async sign() {
        const { ctx } = this;

        const { tx, type, priKey } = ctx.request.body
        const wallet = await gatewallet.default.createWalletFromGateChainAccount(signer, ctx.app.config.contract, priKey);

        try {
            const signature = wallet.gateWallet.getSignature(tx, type)
            ctx.body = {
                code: 0,
                message: 'success',
                sign: signature
            } 
        } catch (error) {
            ctx.body = {
                code: -1,
                message: error.message,
                sign: ''
            }
        }
        
    }

}

module.exports = SignController;