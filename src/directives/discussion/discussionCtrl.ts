export default function discussionCtrl($scope, $stateParams, HackerNewsAPI) {
  $scope.discussionID = $stateParams.discussionID;
  $scope.discussion = HackerNewsAPI.fetchItem($stateParams.discussionID);

  $scope.$parent.$on('$destroy', function() {
    if ($scope.discussion) $scope.discussion.$destroy();
  });
}