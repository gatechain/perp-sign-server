'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 签名
  router.post('/sign', controller.sign.sign);
};
