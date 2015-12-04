export default function itemCtrl($scope, $element, $attrs, $sce, HackerNewsAPI) {
  $attrs.$addClass('item');
  $scope.loadChildren = true;

  $attrs.$observe('loadChildren', val =>
    $scope.loadChildren = val !== 'false');

  $attrs.$observe('topLevel', val => {
    if (val === 'true') $scope.loadChildren = false
  });

  var firebasePromise;
  // Watch for changes and update our synched item.
  $scope.$watch(() => $scope.id, () => {
    // If we already have a firebase connection destroy it
    // so we can re-bind it.
    if (firebasePromise) firebasePromise.$destroy();

    firebasePromise = HackerNewsAPI.fetchItem($scope.id);
    firebasePromise.$bindTo($scope, 'item');
  });

  $scope.hideItem = false;
  $scope.toggleHideItem = () => $scope.hideItem = !$scope.hideItem;
}