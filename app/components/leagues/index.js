'use strict';

module.exports = (app) => {
  app.controller('leaguesController', ['Auth', 'LeagueService', function(Auth, LeagueService) {
    this.user = Auth.getUser();
    this.leagues = LeagueService.fetchLeagues(this.user);
  }]);

  app.component('leagues', {
    template: require('./leagues_template.html'),
    controller: 'leaguesController',
    bindings: {
      user: '<'
    }
  })
}