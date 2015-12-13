export default function itemCtrl($scope, $element, $attrs, $sce, HackerNewsAPI) {
  $scope.loadChildren = true;
  $scope.hideItem = false;
  $scope.expandItem = false;
  $scope.toggle = {
    hide: function() {
      $scope.hideItem = !$scope.hideItem
    },
    expand:  function() {
      $scope.expandItem = !$scope.expandItem
    },
  };

  let watcherID = $scope.$watch('itemId', function() {
    if ($scope.item) $scope.item.$destroy();

    $scope.item = HackerNewsAPI.fetchItem($scope.itemId);
  });

  $element.on('$destroy', function() {
    if ($scope.item) $scope.item.$destroy();
    if (watcherID) watcherID();
    $scope.$destroy();
  });

  $attrs.$observe('loadChildren', function(val) {
    $scope.loadChildren = val !== 'false';
  });

  $attrs.$observe('topLevel', function(val) {
    if (val === 'true') {
      $scope.loadChildren = false;
      $scope.expandItem = true;
    }
  });
}