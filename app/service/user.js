'use strict';
const Service = require('egg').Service;

class UserService extends Service {

  async login() {
    const { ctx } = this;
    const user = await this.app.mysql.get('users', { email: '1' });
    const res = {
      code: -1,
      msg: '用户已存在',
    };

    return user;
  }

  async signUp() {
    const { ctx } = this;

    console.log(ctx.request.body);
    const { firstName, lastName, email, password } = ctx.request.body;


    const isUserRegistered = await this.app.mysql.get('users', { email });
    if (isUserRegistered) {
      return {
        code: 10001,
        msg: '用户已存在',
        data: null,
      };
    }

    const user = await this.app.mysql.insert('users', { firstName, lastName, email, password });
    if (user) {
      return {
        code: 0,
        msg: 'success',
        data: null,
      };
    }
    return null;
  }
}

module.exports = UserService;
