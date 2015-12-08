export function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/main/main.html'
        });

    $urlRouterProvider.otherwise('/');
}
