import 'angular';
import './spinner.scss';

const moduleName = 'spinner';

angular
  .module(moduleName, [])
  .directive('spinner', function():ng.IDirective {
    return {
      scope: {},
      restrict: 'E',
      template: `<div class="spinner">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                 </div> `
    };
  })
;

export default moduleName;