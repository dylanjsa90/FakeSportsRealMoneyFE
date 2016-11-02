'use strict';

module.exports = (app) => {
  app.component('intro', {
    template: require('./intro.html'),
  });
};