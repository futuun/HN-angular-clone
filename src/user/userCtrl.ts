export default function userCtrl($scope, $stateParams, HackerNewsAPI) {
  $scope.userID = $stateParams.userID;
  $scope.pageSize = 25;
  HackerNewsAPI.fetchUser($stateParams.userID).$bindTo($scope, 'user');
}