describe('app.calculate: controllers: CalculateController', () => {
    let sut;

    beforeEach(angular.mock.module('app.calculate'));

    beforeEach(inject(($controller) => {
        sut = $controller('CalculateController');
    }));

    describe('calculate digits', () => {
        beforeEach(() => {
            sut.first = 1;
            sut.second = 2;
        });

        context('when the numbers are correct', () => {
            it('should properly be calculate correctly two numbers', () => {
                sut.calculate();
                sut.result.should.be.equal(3);
            });
        });

        context('when the numbers are not correct', () => {
            beforeEach(() => {
                sut.first = 'not correct';
            });

            it('should be nan', () => {
                sut.calculate();
                sut.result.should.be.Nan;
            });
        });
    });

});
