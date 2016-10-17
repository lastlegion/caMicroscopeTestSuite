//Requires ChromeDriver and Selenium Server to be running while this script is ran
var ToolBar = require("../pageobjects/ToolBar.js");
var assert = require('chai').assert;
var webdriverio = require('webdriverio');
var options = { desiredCapabilities : { browserName: 'chrome' } };
var client = webdriverio.remote(options);

describe('Viewing options', function() {
    describe('Zoom option', function() {
        it('should allow the user to zoom in on the image', function() {
	    ToolBar.open();
	    var getZoom = function() { //Grabs the current zoom level from the browser's console
		return viewer.viewport.getZoom();
	    }
	    var zoomOne = browser.execute(getZoom); //Gets the pre-zoom zoom level
	    var zoomArb = browser.execute(function() { //Zooms in an arbitrary amount
		viewer.viewport.zoomBy(4)
	    })
	    var zoomTwo = browser.execute(getZoom) //Gets the post-zoom zoom level
	    assert.notEqual(zoomOne.value, zoomTwo.value); //Asserts that the pre- and post-zoom levels are not the same
	});
    });
    describe('Pan option', function() {
	it('should allow the user to pan around the image', function() {
	    ToolBar.open();
	    var centerOne = browser.execute(function() { //Grabs the center coordinates from the browser's console before any actions have been performed
		return viewer.viewport.getCenter();
	    });
	    var zoomArb = browser.execute(function() { //Zooms in an arbitrary amount to make certain that the canvas has room to pan
		viewer.viewport.zoomBy(4);
	    });
	    browser.moveToObject('#algosel', 0, 0) //Moves to an arbitrary object
	    browser.buttonDown()
	    browser.moveToObject('#algosel', 100, 200) //Clicks and drags to pan the canvas
	    browser.buttonUp()
	    var centerTwo = browser.execute(function() { //Grabs the new center coordinates
		return viewer.viewport.getCenter();
	    });
	    assert.notEqual(centerOne.value, centerTwo.value) //Asserts that the pre- and post-pan center values are not the same
	});
    });
});
