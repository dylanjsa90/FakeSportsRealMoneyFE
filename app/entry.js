'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let sportsApp = angular.module('sportsApp', [require('angular-route'), require('angular-jwt')]);

require('./services')(sportsApp);

sportsApp.run(['$rootScope', ($rs) => {
  $rs.baseUrl = `${__API_URL__}`,
  $rs.userConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    }
  };
}]);

sportsApp.config(['$routeProvider', ($rp) => {
  $rp
  .when('/signup', {
    template: require('./html/signup.html')
  })
  .when('/signin', {
    template: require('./html/signin.html')
  })
  .when('/registerLeague', {
    template: require('./html/register_league.html')
  })
  .when('/home', {
    template: require('./html/home.html'),
    controller: 'AuthController',
    access: {allowAnonymous: false}
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);