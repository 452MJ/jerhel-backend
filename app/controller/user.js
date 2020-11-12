'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async login() {
    const { ctx, service } = this;

    ctx.cookies.set('Bear', {
      signed: true,
    });
    ctx.response.body = ctx.request.body;
    // ctx.response.body = await service.user.signUp();

  }

  async signUp() {
    const { ctx, service } = this;
    ctx.response.body = await service.user.signUp();
  }
}

module.exports = UserController;
