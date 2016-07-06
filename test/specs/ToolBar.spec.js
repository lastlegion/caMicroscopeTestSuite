var ToolBar = require("../pageobjects/ToolBar.js");
//var assert = require('assert');
var assert = require('chai').assert;


describe('ToolBar', function() {
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
});
