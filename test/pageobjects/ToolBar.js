/* global browser */


var Camic = require('./Camic');

var ToolBar = Object.create(Camic, {
    title: {get: function() { return browser.element(".titleButton"); }},
    drawRectangeButton: {get: function() { return browser.element("#drawRectangle"); }},
    open: {
        value: function(){
            Camic.open();
        }
    }
});

module.exports = ToolBar;
