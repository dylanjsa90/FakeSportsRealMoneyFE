'use strict';

require('./_nav.scss');
require('./_nav_icon.scss');

module.exports = function(app) {
  app.component('navBar', {
    controller: 'NavController',
    template: require('./nav_bar_template.html'),
  });

  app.controller('NavController', function() {
    this.isCollapsed = true;
    this.collapsedClass = this.isCollapsed ? 'collapse': '';
    this.toggle = function() {
      this.isCollapsed = !this.isCollapsed;
      this.collapsedClass = this.isCollapsed ? 'collapse': '';
    };
  });
};