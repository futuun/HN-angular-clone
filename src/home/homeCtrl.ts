export default function homeCtrl($scope, HackerNewsAPI) {
  $scope.pageSize = 30;
  $scope.items = HackerNewsAPI.fetchHomepage();
}