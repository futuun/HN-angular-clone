import userCtrl from './userCtrl.ts';
const userTemplate = require('./user.html');
import './user.scss';

export default function user():ng.IDirective {
  return {
    scope: {},
    templateUrl: userTemplate,
    controller: ['$scope', '$stateParams', 'HackerNewsAPI', userCtrl]
  };
}