'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include logo with correct data', function() {
    expect(page.h2El.getText()).toBe('\'Allo, \'Allo!');
  });

  it('should list more than 5 awesome things', function () {
    expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  });

});
