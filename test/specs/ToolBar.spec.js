//Requires ChromeDriver and Selenium Server to be running while this script is ran
var ToolBar = require("../pageobjects/ToolBar.js");
var assert = require('chai').assert;
var webdriverio = require('webdriverio');
var options = { desiredCapabilities : { browserName: 'chrome' } };
var client = webdriverio.remote(options);

describe('ToolBar', function() {
    //these actions assert that certain elements of the page exist
    describe('Title element', function() {
        it('should have the text: camicroscope', function(){
            ToolBar.open();
            var titleText = ToolBar.title.getText();
            assert.equal(titleText, 'caMicroscope'); //Check if title matches
        });
    });

    describe('Draw Rectangle', function() {
        it('should have the draw rectangle button', function(){
            ToolBar.open();
            var drawRectangleButton = ToolBar.drawRectangleButton;
            assert.isNotNull(drawRectangleButton);
        });
    });
    
    describe('Hide Button', function() {
	it('should have the "hide" button', function() {
	    ToolBar.open();
	    var hideButton = ToolBar.hideButton;
	    assert.isNotNull(hideButton);
	});
    });
    
    describe('Draw Freeline', function() {
	it('should have the freeline button', function() {
	    ToolBar.open();
	    var freelineButton = ToolBar.freelineButton;
	    assert.isNotNull(freelineButton);
	});
    });

    describe('Filter button', function() {
	it('should have the filter button', function() {
	    ToolBar.open();
	    var filterButton = ToolBar.filterButton;
	    assert.isNotNull(filterButton);
	});
    });
});

var draw = function(buttonId) {
    browser.leftClick(buttonId) //Left-clicks a selection button
    browser.moveToObject('#algosel', 0, 0) //Moves to an arbitrary point on the canvas
    browser.buttonDown()
    browser.moveToObject('#algosel', 200, 100)
    browser.moveToObject('#algosel', 100, 200)
    browser.buttonUp() //Draws an arbitrary selection
}

describe('Button State', function() {
    describe('Draw rectangle operation', function() {
	it('should allow user to select a rectangular area', function() {
	    ToolBar.open();
	    draw('#drawRectangle') //Draws an arbitrary selection with the draw-rectangle button
	    var panelDisplay = browser.getCssProperty('#panel', 'display') //Describes selection panel
	    assert.equal(panelDisplay.value, 'block') //Assert that the selection panel has been pulled up
	});
    });
    describe('Draw freeline operation', function() {
	it('should allow user to select a freeline area', function() {
	    ToolBar.open();
            draw('#pencilButton') //Draws an arbitrary selection with the draw-freeline button
            var panelDisplay = browser.getCssProperty('#panel', 'display') //Describes selection panel
            assert.equal(panelDisplay.value, 'block') //Assert that the selection panel has been pulled up

	});
    });
    describe('Hide button operation', function() {
	it('should allow user to toggle view of drawn areas', function() {
	    ToolBar.open();
	    browser.leftClick('#hideButton', 0, 0) //Clicks the show/hide button
	    browser.pause(500) //Pauses to allow for refresh
	    var markupDisplay = browser.getCssProperty('#markups', 'opacity') //Describes the opacity property of the 'markups' svg to look for
	    console.log(markupDisplay)
	    assert.equal(markupDisplay.value, 0) //Asserts that the opacity is 0 or transparent
	});
    });
    describe('Markup Filter', function() {
	it('should display the filter menu', function() {
	    ToolBar.open();
	    browser.leftClick('#filterButton') //Clicks the algorithm filter button
	    var visibilityCheck1 = browser.getCssProperty('#algosel', 'visibility') //Describes visibility
	    assert.equal(visibilityCheck1.value, 'visible') //Checks that the menu is visible
	    browser.leftClick('#filterButton') //Re-clicks filter button
	    var visibilityCheck2 = browser.getCssProperty('#algosel', 'visibility') //Re-describe visibility
	    assert.equal(visibilityCheck2.value, 'hidden') //Checks that the menu is hidden
	});
    });
});
