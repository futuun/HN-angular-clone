export default function homeCtrl($scope, $stateParams, HackerNewsAPI) {
  $scope.pageSize = 20;
  let firebasePromise = fetchProperData();

  firebasePromise.$loaded()
    .then(function(data) {
      $scope.items = data;
      firebasePromise.$watch(function(e) {
        firebasePromise.sort(function compare(a, b) {
          return +a.$id -b.$id;
        });
        $scope.items = firebasePromise;
      });
    })
    .catch(function(error) {
      console.error("Error:", error);
    });

  function fetchProperData() {  // could be done with eval :)
    switch ($stateParams.view) {
      case '': return HackerNewsAPI.fetchHot();
      case 'ask': return HackerNewsAPI.fetchAsk();
      case 'best': return HackerNewsAPI.fetchBest();
      case 'job': return HackerNewsAPI.fetchJob();
      case 'show': return HackerNewsAPI.fetchShow();
    }
  }
}