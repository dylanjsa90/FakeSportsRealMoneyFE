'use strict';

require('./_footer.scss');

module.exports = function(app) {
  app.component('footerComponent', {
    template: require('./footer_component_template.html')
  });
};