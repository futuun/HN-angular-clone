export default function discussionCtrl($scope, $stateParams, HackerNewsAPI) {
  $scope.discussionID = $stateParams.discussionID;
  HackerNewsAPI.fetchItem($stateParams.discussionID).$bindTo($scope, 'discussion');
}