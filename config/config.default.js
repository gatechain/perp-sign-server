const path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

  const config = exports = {};

  config.contract = {
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

  config.perpContract = {
    85: {
      GateChain: '0xCf8751cD1346149030Eca079EFBf8a73BEd45abc',
    }
  }
  config.cluster = {
    listen: {
      port: 3000,
      hostname: '0.0.0.0',

    }
  };

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [''],
  }

  config.middleware = ['request', 'error'];

  // 跨域设置
  config.cors = {
    origin: '*', // domainWhiteList 有值的话这里可以删掉
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

  return config;
};