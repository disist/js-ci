export function routerConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('calculate', {
            url: '/calculate',
            templateUrl: 'app/calculate/calculate.html',
            controller: 'CalculateController',
            controllerAs: 'calculateCtrl'
        });
}
