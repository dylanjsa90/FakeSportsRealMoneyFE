'use strict';

module.exports = (app) => {
  app.factory('LeagueService', ['$q', '$http', 'Auth', function ($q, $http, Auth) {
    let service = {};
    let url = `${API_URL}/api`;
    service.fetchLeagues = function () {
      let user = Auth.getUser();
      return $q((resolve, reject) => {
        $http.get(`${url}/user/${user}`)
          .then(res => {
            this.leagues = res.data;
            resolve(res.data);
          }).catch(err => {
            alert('Error Retriving Leagues');
            reject(err);
          });
        // return this.leagues;
      });
    };

    service.fetchLeagueMembers = function (league) {
      return $q((resolve, reject) => {
        $http.get(`${url}/league/${league._id}`)
          .then(res => {
            this.leagueData = res.data;
            resolve(res.data);
          }).catch(err => {
            alert('Error Retrieving League Data');
            reject(err);
          });
        // return this.leagueData;
      });
    };

    service.createLeague = function (data, config) {
      return $q((resolve, reject) => {
        $http.post(`${url}/league/`, data, config)
          .then(res => {
            this.leagues.push(res.data);
            resolve(res.data);
          }).catch(err => {
            alert('Error Creating League');
            reject(err);
          });
      });
    };

    return service;
  }]);
};