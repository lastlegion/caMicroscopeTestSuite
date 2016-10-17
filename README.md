# caMicroscopeTestSuite
QA/Tests for caMicroscope


## Installation
* Install selenium webdriver (http://www.seleniumhq.org/projects/webdriver/)
* Run `npm install`
* Install ChromeDriver for selenium with `npm install chromedriver`
* Install Mocha testing framework with `npm install mocha`
* Install Chai assertion library with `npm install chai`

## Running
* Start selenium server `java -jar selenium-server-standalone-2.53.0.jar`
* The selenium server version: 3.0.0, Firefox Version: 46.0.0, from https://ftp.mozilla.org/pub/firefox/releases/46.0/
* Start chromedriver `./chromedriver`
* Use `./node_modules/webdriverio/bin/wdio wdio.conf.js` to run all scripts in test/specs/ with the extention `.spec.js`

