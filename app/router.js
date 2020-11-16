'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.user.login);
  router.post('/signUp', controller.user.signUp);

  router.get('/user/info', jwt, controller.user.userInfo);
};
