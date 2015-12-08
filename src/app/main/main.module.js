export function appMain() {}

import { routerConfig } from './main.route';
import { runBlock } from './main.run';

angular.module('app.main', [
        'ui.router',
        'ngMaterial'
    ])
    .config(routerConfig)
    .run(runBlock);
