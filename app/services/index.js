'use strict';

module.exports = (app) => {
  require('./auth_service')(app);
  require('./league_service')(app);
  require('./member_service')(app);
};