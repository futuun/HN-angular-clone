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

  let firebasePromise;
  $scope.$watch('itemId', function() {
    if (firebasePromise) firebasePromise.$destroy();

    firebasePromise = HackerNewsAPI.fetchItem($scope.itemId);
    firebasePromise.$loaded()
      .then(function(data) {
        $scope.item = data;
      })
      .catch(function(error) {
        console.error("Error:", error);
      });
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