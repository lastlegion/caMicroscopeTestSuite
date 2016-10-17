//Tools for test cases
//WIP

var Camic = require('./Camic');

var Performance = { //Should grab the performance timestamp from the browser's console
    timestamp: function() {return performance.now()}
}

module.exports = Performance;

