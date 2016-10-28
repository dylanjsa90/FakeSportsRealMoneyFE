'use strict';

module.exports = (app) => {
  app.controller('MainController', function() {
    
  });


  app.component('dsMain', {
    controller: 'MainController',
    template: require('./main_template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};