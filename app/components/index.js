'use strict';

module.exports = (app) => {
  require('./sign_up')(app);
  require('./sign_in')(app);
  require('./nav_bar')(app);
  require('./footer_component')(app);
  require('./main')(app);
  require('./leagues')(app);
  require('./league_form')(app);
};