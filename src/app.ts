import 'firebase';
import 'angular';
import 'angular-ui-router';
import 'angularfire';

import routes from './routes.ts';
import HackerNewsAPI from './factories/HackerNewsAPI.ts';
import navigation from './directives/navigation/navigation.ts';
import home from './directives/home/home.ts';
import user from './directives/user/user.ts';
import discussion from './directives/discussion/discussion.ts';

import domain from './filters/domain.ts';
import commentsNumber from './filters/commentsNumber.ts';
import trustHtml from './filters/trustHtml.ts';

import pagination from './components/pagination/index.ts';
import timeAgo from './components/timeAgo/index.ts';
import spinner from './components/spinner/spinner.ts';
import item from './components/item/index.ts';

module hackerNews {
  'use strict';
  angular
    .module('hacker-news', ['ui.router', 'firebase', pagination, timeAgo, spinner, item])
    .config(['$urlRouterProvider', '$stateProvider', routes])
    .factory('HackerNewsAPI', ['$firebaseArray', '$firebaseObject', HackerNewsAPI])
    .directive('navigation', navigation)
    .directive('home', home)
    .directive('user', user)
    .directive('discussion', discussion)
    .filter('domain', domain)
    .filter('commentsNumber', commentsNumber)
    .filter('trustHtml', ['$sce', trustHtml])
  ;
}
export default hackerNews;