import 'angular';
import pagination from './pagination.ts';
import pageFilter from './page.ts';
import './pagination.scss';

const moduleName = 'pagination';

angular
  .module(moduleName, [])
  .directive('pagination', pagination)
  .filter('page', pageFilter)
;

export default moduleName;