'use strict';

module.exports = (app) => {
  app.factory('MemberService', ['$q', '$http', function($q, $http) {
    let service = {};
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    };
    
    service.addMember = function(data) {
      let url = `${__API_URL__}/league/${data.league}/user`;
      return $q((resolve, reject) => {
        $http.post(url, data, config).then(res => {
          resolve(res.data);
        }).catch(err => reject(err));
      });
    };

    service.updateMember = function(data) {
      let url = `${__API_URL__}/league/${data.league}/user/${data._id}`;
      return $q((resolve, reject) => {
        $http.put(url, data, config).then(res => {
          resolve(res.data);
        }).catch(err => reject(err));
      });
    };

    service.removeMember = function(member) {
      let url = `${__API_URL__}/league/${member.league}/user/${member._id}`;
      return $q((resolve, reject) => {
        $http.delete(url, config)
          .then(res => {
            resolve(res.data);
          }).catch(err => reject(err));
      });  
    };


    return service;
  }]);
};