export default function userCtrl($scope, $stateParams, HackerNewsAPI) {
  $scope.userID = $stateParams.userID;
  $scope.pageSize = 20;
  $scope.showSubmissions = false;
  $scope.toggleSubmissions = function() {
    $scope.showSubmissions = !$scope.showSubmissions;
  };

  HackerNewsAPI.fetchUser($stateParams.userID).$bindTo($scope, 'user');
}