import 'angular';
import './item.scss';
import item from './item.ts';

const comment = require('./partials/comment.htm');
const job = require('./partials/job.htm');
const poll = require('./partials/poll.htm');
const pollopt = require('./partials/pollopt.htm');
const story = require('./partials/story.htm');

const moduleName = 'item';

angular
  .module(moduleName, [])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('comment', comment);
    $templateCache.put('job', job);
    $templateCache.put('poll', poll);
    $templateCache.put('pollopt', pollopt);
    $templateCache.put('story', story);
  }])
  .directive('item', item)
;

export default moduleName;