export default function routes(
  $urlRouterProvider:ng.ui.IUrlRouterProvider,
  $stateProvider:ng.ui.IStateProvider
):void {
  $urlRouterProvider.otherwise('/');
  ;
}