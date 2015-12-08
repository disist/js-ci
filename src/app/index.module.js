
import { appMain } from './main/main.module';
import { appCalculate } from './calculate/calculate.module';

angular.module('app', [
    'app.main',
    'app.calculate'
]);
