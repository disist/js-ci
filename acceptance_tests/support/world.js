'use strict';

var zombie = require('zombie');
function World() {
    this.browser = new zombie();

    this.visit = function (url) {
        return this.browser.visit(url);
    };

    this.firstButtonClick = function () {
        return this.browser.fire(".md-button", "click");
    };

    this.pressButton = function (name) {
        return this.browser.pressButton(name);
    };

    this.fill = function (property, value) {
        return this.browser.fill(property, value);
    }
}

module.exports = function () {
    this.World = World;
};
