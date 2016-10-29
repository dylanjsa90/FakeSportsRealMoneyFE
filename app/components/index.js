'use strict';

module.exports = function (app) {
  require('./sign_up')(app);
  require('./sign_in')(app);
  require('./nav_bar')(app);
  require('./footer_component')(app);
  require('./main')(app);
  require('./league_form')(app);
};