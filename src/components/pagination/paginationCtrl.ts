export default function paginateCtrl($scope) {
  $scope.page = $scope.page || 0;
  $scope.show = {};

  $scope.$watch(() => $scope.page + $scope.totalItems, calculateState);

  $scope.prevPage = () => $scope.page = Math.max($scope.page - 1, 0);
  $scope.nextPage = () => $scope.page = $scope.page + 1;

  function calculateState() {
    $scope.currentPage = $scope.page + 1;

    $scope.show.prevPage = $scope.page !== 0;
    $scope.show.nextPage = $scope.pageSize * ($scope.page + 1) < $scope.totalItems;
  }
}