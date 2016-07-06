/* global browser */


var Camic = require('./Camic');

var ToolBar = Object.create(Camic, {
    title: {get: function() { return browser.element(".titleButton"); }},
    drawRectangleButton: {get: function() { return browser.element("#drawRectangle"); }},
    drawFreelineButton: {get: function() { return browser.element("#pencilButton"); }},
    hideButton: {get: function() { return browser.element("#hideButton"); }},
    open: {
        value: function(){
            Camic.open();
        }
    }
});

module.exports = ToolBar;
