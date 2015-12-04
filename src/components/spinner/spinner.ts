import 'angular';
import './spinner.scss';

const moduleName = 'spinner';

angular
  .module(moduleName, [])
  .directive('spinner', function():ng.IDirective {
    return {
      scope: {},
      restrict: 'E',
      template: '<div class="s"><div class="b1"></div><div class="b2"></div><div class="b3"></div><div class="b4"></div><div class="b5"></div><div class="b6"></div></div>'
    };
  })
;

export default moduleName;