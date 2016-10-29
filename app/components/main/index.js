'use strict';

module.exports = (app) => {
  app.controller('MainController', ['LeagueService', function(LeagueService) {
    this.leagues = LeagueService.fetchLeagues();
  
  }]);


  app.component('dsMain', {
    controller: 'MainController',
    template: require('./main_template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};