describe('controllers: MainController', () => {
    let sut;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(($controller) => {
        sut = $controller('MainController');
    }));

    it('should have a awesomeThings array', () => {
        sut.awesomeThings.should.deep.equal([]);

    });

});
