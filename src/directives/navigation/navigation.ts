import navigationCtrl from './navigationCtrl.ts';
const navigationTemplate = require('./navigation.html');
import './navigation.scss';

export default function navigation():ng.IDirective {
  return {
    scope: {},
    templateUrl: navigationTemplate,
    controller: ['$scope', '$stateParams', navigationCtrl]
  };
}