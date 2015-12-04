import 'firebase';
import 'angular';
import 'angular-ui-router';
import 'angularfire';

import routes from './routes.ts';
import HackerNewsAPI from './factories/HackerNewsAPI.ts';
import home from './home/home.ts';
import item from './item/item.ts';
import user from './user/user.ts';
import discussion from './discussion/discussion.ts';

import domain from './filters/domain.ts';
import commentsNumber from './filters/commentsNumber.ts';
import trustHtml from './filters/trustHtml.ts';

import pagination from './components/pagination/index.ts';
import timeAgo from './components/timeAgo/index.ts';
import spinner from './components/spinner/spinner.ts';

module hackerNews {
  'use strict';
  angular
    .module('hacker-news', ['ui.router', 'firebase', pagination, timeAgo, spinner])
    .config(['$urlRouterProvider', '$stateProvider', routes])
    .factory('HackerNewsAPI', ['$firebaseArray', '$firebaseObject', HackerNewsAPI])
    .directive('home', home)
    .directive('user', user)
    .directive('discussion', discussion)
    .directive('item', item)
    .filter('domain', domain)
    .filter('commentsNumber', commentsNumber)
    .filter('trustHtml', ['$sce', trustHtml])
  ;
}
export default hackerNews;