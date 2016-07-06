function Camic() {

}

Camic.prototype.open = function(path){
    browser.url('http://dragon.cci.emory.edu/camicroscope3QA/osdCamicroscope.php?tissueId=TCGA-02-0001');
};

module.exports = new Camic();
