'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async signUp() {
    const { ctx } = this;
    const res = {
      code: -1,
      msg: '用户已存在'
    };
    // const queryResult = await ctx.model.User.findOne({
    //   userName: signupMsg.userName,
    // });
    // if (queryResult) {
    //   res.code = -1;
    //   res.msg = '用户已存在';
    // } else {
    //   const result = await ctx.model.User.create(signupMsg);
    //   res.data = result;
    //   res.code = 1;
    //   res.msg = '注册成功';
    // }
    return res;
  }
}

module.exports = UserService;
