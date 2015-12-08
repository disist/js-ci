export function appCalculate() {}

import { routerConfig } from './calculate.route';
import { CalculateController } from './calculate.controller';

angular.module('app.calculate', [
        'ui.router',
        'ngMaterial'
    ])
    .config(routerConfig)
    .controller('CalculateController', CalculateController);
