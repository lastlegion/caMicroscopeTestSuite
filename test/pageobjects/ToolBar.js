/* global browser */


var Camic = require('./Camic');

var ToolBar = Object.create(Camic, { //Describes elements on the web page and creates the 'open' functions required in the test cases
    title: {get: function() { return browser.element(".titleButton"); }},
    drawRectangleButton: {get: function() { return browser.element("#drawRectangle"); }},
    drawFreelineButton: {get: function() { return browser.element("#pencilButton"); }},
    hideButton: {get: function() { return browser.element("#hideButton"); }},
    filterButton: {get: function() { return browser.element("#filterButton"); }},
    panel: {get: function() { return browser.element("#panelBody"); }}, //Should only exist after a "draw x" panel has been opened
    open: {
        value: function(){
            Camic.open();
        }
    }
});

module.exports = ToolBar;
