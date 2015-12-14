export default function paginateCtrl($scope) {
  $scope.page = $scope.page || 0;
  $scope.show = {};

  $scope.prevPage = function prevPage() {
    $scope.page = Math.max($scope.page - 1, 0);
  }

  $scope.nextPage = function nextPage() {
    $scope.page = Math.min($scope.page + 1, $scope.totalPages - 1);
  }

  $scope.$watchGroup(['page', 'totalItems'], function() {
    $scope.currentPage = $scope.page + 1;
    $scope.totalPages = Math.ceil($scope.totalItems / $scope.pageSize);

    $scope.show.prevPage = $scope.page !== 0;
    $scope.show.nextPage = $scope.pageSize * ($scope.page + 1) < $scope.totalItems;
  });
}