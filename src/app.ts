import 'firebase';
import 'angular';
import 'angular-ui-router';
import 'angularfire';

import routes from './routes.ts';

module hackerNews {
  'use strict';
  angular
    .module('hacker-news', ['ui.router', 'firebase'])
    .config(['$urlRouterProvider', '$stateProvider', routes])
  ;
}
export default hackerNews;