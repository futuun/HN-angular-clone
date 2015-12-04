export default function routes(
  $urlRouterProvider:ng.ui.IUrlRouterProvider,
  $stateProvider:ng.ui.IStateProvider
):void {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
  ;
}