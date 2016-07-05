'use strict';

class Store {
  constructor() {
    this.store = [];
  }

  addRule(rule, action) {
    this.store.push({rule, action});
  }

  getMessage(number) {
    let msg = '';
    this.store.forEach(obj => {
          if (obj.rule(number)) {
            msg = obj.action(msg);
          }
      });
    return msg === '' ? number : msg;
  }

}

module.exports = Store;
