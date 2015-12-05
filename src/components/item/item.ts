import itemCtrl from './itemCtrl.ts';
const itemTemplate = require('./item.html');

export default function item():ng.IDirective {
  return {
    scope: {
      id: '=',
      loadChildren: '@?',
      topLevel: '@?'
    },
    templateUrl: itemTemplate,
    controller: ['$scope', '$element', '$attrs', '$sce', 'HackerNewsAPI', itemCtrl]
  };
}