'use strict';


const moment = require('moment');
const Service = require('egg').Service;

class UserService extends Service {

  async login() {
    const { ctx, app } = this;
    const { email, password } = ctx.request.body;
    const user = await this.app.mysql.get('users', { email, password });
    if (user) {
      const token = app.jwt.sign({
        email: user.email,
        password: user.password,
      }, app.config.jwt.secret, {
        // expiresIn: '1800s',
      });

      return {
        code: 0,
        msg: '登录成功', data: {
          token,
        },
      };
    }

    ctx.throw('账号或密码错误');
  }

  async userInfo() {
    const { ctx, app } = this;
    const token = ctx.request.headers.authorization.split(' ')[1];
    const { email, password } = app.jwt.decode(token);
    const user = await this.app.mysql.get('users', { email, password });
    if (user) {
      return {
        code: 0,
        msg: 'success', data: user,
      };

    }

    return {
      code: 500,
      msg: '服务器错误',
      data: null,
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
    const user = await this.app.mysql.insert('users', {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      create_at: moment().valueOf(),
    });

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
