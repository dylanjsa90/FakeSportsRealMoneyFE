'use strict';

module.exports = (app) => {
  app.controller('AuthController', ['$http', '$location', '$window', 'Auth', function($http, $location, $window, Auth) {
    
    if (Auth.getToken({noRedirect: true}) && $location.url().includes('home')) $location.path('/home');

    this.signup = function(user) {
      $http.post(this.baseUrl + '/api/signup', user)
        .then(res => {
          Auth.setToken(res.data.token);
          $location.path('/home');
        }, (err) => {
          alert('Sorry, username already exists');
        });
    };

    this.signin = function(user)  {
      $http.get(this.baseUrl + '/api/signin', {
        headers: {
          'Authorization': 'Basic ' + $window.btoa(user.email + ':' + user.password)
        }
      })
      .then(res => {
        Auth.setToken(res.data.token);
        $location.path('/home');
      }, (err) => {
        alert('Invalid Login Credentials');
      });
    };

    this.user = Auth.getUser();
    this.logOut = Auth.logOut.bind(Auth);

  }]);
};