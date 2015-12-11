import 'angular';
import timeAgo from './timeAgo.ts';
import fromNow from './fromNow.ts';

const moduleName = 'time-ago';

angular
  .module(moduleName, [])
  .filter('fromNow', fromNow)
  .directive('timeAgo', ['$timeout', '$interval', 'fromNowFilter', timeAgo])
;

export default moduleName;