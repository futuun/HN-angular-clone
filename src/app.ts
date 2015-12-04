import 'firebase';
import 'angular';
import 'angular-ui-router';
import 'angularfire';

import routes from './routes.ts';
import HackerNewsAPI from './factories/HackerNewsAPI.ts';
import home from './home/home.ts';
import item from './item/item.ts';

module hackerNews {
  'use strict';
  angular
    .module('hacker-news', ['ui.router', 'firebase'])
    .config(['$urlRouterProvider', '$stateProvider', routes])
    .factory('HackerNewsAPI', ['$firebaseArray', '$firebaseObject', HackerNewsAPI])
    .directive('home', home)
    .directive('item', item)
  ;
}
export default hackerNews;