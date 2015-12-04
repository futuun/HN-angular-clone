import discussionCtrl from './discussionCtrl.ts';
const discussionTemplate = require('./discussion.html');

export default function discussion():ng.IDirective {
  return {
    scope: {},
    templateUrl: discussionTemplate,
    controller: ['$scope', '$stateParams', 'HackerNewsAPI', discussionCtrl]
  };
}