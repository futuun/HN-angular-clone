export default function navigationCtrl($scope, $stateParams) {
  $scope.view = $stateParams.view;
  $scope.$on('$locationChangeSuccess', function(event) {
    $scope.view = $stateParams.view;
  });
}