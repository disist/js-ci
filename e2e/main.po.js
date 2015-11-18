'use strict';

var MainPage = function() {
  this.mainEl = element(by.css('.page-content'));
  this.h2El = this.mainEl.element(by.css('h2'));
  this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in main.awesomeThings'));
};

module.exports = new MainPage();
