'use strict';


const moment = require('moment');
const Service = require('egg').Service;

class UserService extends Service {

  async login() {
    const { ctx } = this;
    const { email, password } = ctx.request.body;
    const user = await this.app.mysql.get('users', { email, password });
    if (user) {
      return { code: 0, data: true };
    }

    return {
      code: 0,
      data: false,
    };
  }

  async signUp() {
    const { ctx } = this;

    console.log(ctx.request.body);
    const { firstName, lastName, email, password } = ctx.request.body;


    const isUserRegistered = await this.app.mysql.get('users', { email });
    if (isUserRegistered) {
      return {
        code: 0,
        msg: '用户已注册',
        data: false,
      };
    }
    const user = await this.app.mysql.insert('users', { first_name: firstName, last_name: lastName, email, password, create_at: moment().valueOf() });

    if (user) {
      return {
        code: 0,
        data: true,
      };
    }
    return null;
  }
}

module.exports = UserService;
