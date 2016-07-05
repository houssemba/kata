'use strict';

const Store = require('./store');

module.exports = function(number) {

  const store = new Store();

  store.addRule(number => number % 3 === 0, () => 'Trois');
  store.addRule(number => number % 5 === 0, msg => `${msg}Cinq`)
  store.addRule(number => number % 7 === 0, msg => `${msg}Sept`);
  store.addRule(number => number === 8, msg => 'Huit!');
  store.addRule(number => number % 3 === 0 && number % 5 === 0, () => 'TROISCINQ')
  store.addRule(number => number % 3 === 0 && number % 7 === 0, () => number)

  return store.getMessage(number);
};
