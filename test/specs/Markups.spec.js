//Requires ChromeDriver and Selenium Server to be running while this script is ran
var ToolBar = require("../pageobjects/ToolBar.js");
var assert = require('chai').assert;
var webdriverio = require('webdriverio');
var options = { desiredCapabilities : { browserName: 'chrome' } };
var client = webdriverio.remote(options);
var Utils = require("../pageobjects/Utils.js"); //Pulls new Utils function set

//create a way to track performance speed on the 'markups' svg. Dissappears after camera movement and reappears after refresh period. Also want to track performance on other programs

//browser.execute() (theoretically) executes a command using the browser's console and returns what the browser returns

var test = browser.execute(Utils.timestamp); //Utils.timestamp attempts to grab the current performance timestamp from the browser's console
console.log('test one ' + test); //Prints timestamp
var testtwo = browser.execute(function() { //Also attempts to grab the current performance timestamp
    return performance.now();
});
console.log('test two ' + testtwo) //Prints timestamp

describe('Markups and algorithms', function() {
    describe('Markups visibility performance after zoom/pan', function() {
	it('should allow markups to refresh after a view change', function() {
	    ToolBar.open();
	    //Should grab timestamp, make a change on the page to allow markups to refresh, grab timestamp after the refresh and display the difference
	});
    });
});

/**/
