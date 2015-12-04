import paginationCtrl from './paginationCtrl.ts';
const paginationTemplate = require('./pagination.html');

export default function pagination():ng.IDirective {
  return {
    scope: {
      page: '=',
      pageSize: '=',
      totalItems: '='
    },
    restrict: 'E',
    templateUrl: paginationTemplate,
    controller: ['$scope', paginationCtrl]
  };
}