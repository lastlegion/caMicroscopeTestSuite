function Camic() {

}

Camic.prototype.open = function(path){
    browser.url('/camicroscope3/osdCamicroscope.php?tissueId=TCGA-02-0001');
};

module.exports = new Camic();
