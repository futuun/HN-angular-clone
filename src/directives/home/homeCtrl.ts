export default function homeCtrl($scope, $stateParams, HackerNewsAPI) {
  $scope.pageSize = 25;

  // $stateParams.view will capture matching string 'ask','job','show,''
  // we can use that to get right content on screen
  // news page will be in separate directive coz of logic
  switch ($stateParams.view) {
    case 'ask':
      $scope.items = HackerNewsAPI.fetchAsk();
      break;
    case 'show':
      $scope.items = HackerNewsAPI.fetchShow();
      break;
    case 'job':
      $scope.items = HackerNewsAPI.fetchJob();
      break;
    case 'ask':
      $scope.items = HackerNewsAPI.fetchAsk();
      break;
    case '':
      $scope.items = HackerNewsAPI.fetchHomepage();
      break;
  }
}