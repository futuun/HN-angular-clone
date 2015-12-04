import homeCtrl from './homeCtrl.ts';
const homeTemplate = require('./home.html');

export default function home():ng.IDirective {
  return {
    scope: {},
    templateUrl: homeTemplate,
    controller: ['$scope', 'HackerNewsAPI', homeCtrl]
  };
}