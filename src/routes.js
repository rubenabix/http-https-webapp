export default config;

/** @ngInject */
function config($stateProvider, $urlRouterProvider, $locationProvider, jwtInterceptorProvider, $httpProvider, jwtOptionsProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    });

  jwtOptionsProvider.config({
    whiteListedDomains: ['192.168.103.102', 'localhost']
  });

  jwtInterceptorProvider.tokenGetter = [function () {
    return window.localStorage.getItem('token');
  }];

  $httpProvider.interceptors.push('jwtInterceptor');

}
