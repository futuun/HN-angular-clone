import 'angular';
import './item.scss';
import item from './item.ts';

const moduleName = 'item';

angular
  .module(moduleName, [])
  .directive('item', item)
;

export default moduleName;