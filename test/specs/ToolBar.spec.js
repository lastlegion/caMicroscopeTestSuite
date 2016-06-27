var ToolBar = require("../pageobjects/ToolBar.js");
var assert = require('assert');



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
            var drawRectangeButton = ToolBar.drawRectangeButton;
            console.log(drawRectangeButton);
        });
    });
});
