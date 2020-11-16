'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async login() {
    const { ctx, service } = this;

    ctx.response.body = await service.user.login();
    // ctx.response.body = await service.user.signUp();

  }

  async signUp() {
    const { ctx, service } = this;
    ctx.response.body = await service.user.signUp();
  }

  async userInfo() {
    const { ctx, service } = this;

    ctx.response.body = await service.user.userInfo();
    // ctx.response.body = await service.user.signUp();

  }
}

module.exports = UserController;
