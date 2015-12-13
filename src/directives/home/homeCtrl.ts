export default function homeCtrl($scope, $stateParams, HackerNewsAPI) {
  $scope.pageSize = 20;
  $scope.items = fetchProperData();

  let watcherID = $scope.items.$watch(function(e) {
    $scope.items.sort(function(a, b) {
      return +a.$id -b.$id;
    });
  });

  $scope.$parent.$on('$destroy', function() {
    if ($scope.item) $scope.item.$destroy();
    if (watcherID) watcherID();
    $scope.$destroy();
  });

  function fetchProperData() {  // could be done with eval :)
    switch ($stateParams.view) {
      case '': return HackerNewsAPI.fetchHot();
      case 'ask': return HackerNewsAPI.fetchAsk();
      case 'best': return HackerNewsAPI.fetchBest();
      case 'job': return HackerNewsAPI.fetchJob();
      case 'show': return HackerNewsAPI.fetchShow();
    }
  }
}