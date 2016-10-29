'use strict';

module.exports = (app) => {
  app.controller('LeagueFormController', ['Auth', 'LeagueService', function(Auth, LeagueService) {
    this.user = Auth.getUser();
    this.createLeague = function() {
      LeagueService.createLeague(this.league);
      this.league = {};
    };
  }]);
  app.component('league-form', {
    template: require('league_form_template.html'),
    controller: 'LeagueFormController',
  });
};