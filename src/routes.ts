export default function routes(
  $urlRouterProvider:ng.ui.IUrlRouterProvider,
  $stateProvider:ng.ui.IStateProvider
):void {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/{view:|ask|job|show}',
      template: '<home></home>'
    })
    .state('user', {
      url: '/user/:userID',
      template: '<user></user>'
    })
    .state('discussion', {
      url: '/discussion/:discussionID',
      template: '<discussion></discussion>'
    })
  ;
}