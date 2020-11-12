'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    ctx.body = JSON.stringify({ code: 0, result: true });
  }
}

module.exports = HomeController;
