/* global browser */
var assert = require('assert');
var webdriverio = require('webdriverio');
var client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });


describe('Camicroscope Toolbar', function() {
    it('should have the right title', function () {
        browser.url('http://dragon.cci.emory.edu/camicroscope3/osdCamicroscope.php?tissueId=TCGA-02-0001');
        //var title = browser.getTitle();
        var titleElem = browser.element('.titleButton');
        titleElem.waitForExist(10000);
        console.log(titleElem.getText());
        assert.equal(titleElem.getText(), 'caMicroscope');

    });
});

