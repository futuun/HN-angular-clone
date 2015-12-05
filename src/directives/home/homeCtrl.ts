export default function homeCtrl($scope, HackerNewsAPI) {
  $scope.pageSize = 25;
  $scope.items = HackerNewsAPI.fetchHomepage();
}