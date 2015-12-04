import userCtrl from './userCtrl.ts';
const userTemplate = require('./user.html');

export default function user():ng.IDirective {
  return {
    scope: {},
    templateUrl: userTemplate,
    controller: ['$scope', '$stateParams', 'HackerNewsAPI', userCtrl]
  };
}