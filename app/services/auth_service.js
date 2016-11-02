'use strict';

module.exports = function(app) {
  app.factory('Auth', ['$window', 'jwtHelper', '$location', function($window, jwtHelper, $location) {
    return {
      user: {},
      getToken: function(options) {
        options = options || {};
        if (this.token) return this.token;
        if ($window.localStorage.token) return this.setToken($window.localStorage.token);
        if (!options.noRedirect) $location.path('/signup');
      },

      setToken: function(token) {
        $window.localStorage.token = token;
        this.token = token;
        this.getUser();
        return token;
      },

      getUser: function() {
        let token = this.getToken();
        if (!token) return false;
        let decoded = jwtHelper.decodeToken(token);
        this.user = decoded.idd;
        return this.user;
      },

      logOut: function() {
        delete $window.localStorage.token;
        this.user = {};
        this.token = {};
        $location.path('/signin');
      }

    };

  }]);
};