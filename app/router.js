'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const test = app.middleware.test();
  const { router, controller } = app;
  router.get('/', test, controller.home.index);
};
