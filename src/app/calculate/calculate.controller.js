export class CalculateController {
    constructor() {
        'ngInject';

        this.result = 0;

        this.first = 1;
        this.second = 2;

    }

    calculate() {
        this.result = Number(this.first) + Number(this.second);
    }
}
