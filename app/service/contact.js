'use strict';


const moment = require('moment');
const Service = require('egg').Service;

class ContactService extends Service {


  async add() {
    const { ctx } = this;

    const { firstName, lastName, email, content } = ctx.request.body;

    const contact = await this.app.mysql.insert('contact', {
      first_name: firstName,
      last_name: lastName,
      email,
      content,
    });

    if (contact) {
      return {
        code: 0,
        data: true,
      };
    }
    return null;
  }
}

module.exports = ContactService;
