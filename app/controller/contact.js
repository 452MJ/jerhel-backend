'use strict';

const Controller = require('egg').Controller;

class ContactController extends Controller {


  async add() {
    const { ctx, service } = this;
    ctx.response.body = await service.contact.add();
  }
}

module.exports = ContactController;
