const path = require('path');
const exec = require('child_process').exec;
const glob = require('glob');
const temp = require("temp").track();

function split(pdfFile, callback) {
    temp.mkdir('NBScraper', function (err, tmpDir) {
        if (err) {
            callback(err);
        } else {
            var output = path.join(tmpDir, '%05d.pdf');
            var wildcard = path.join(tmpDir, '*.pdf');

            exec('pdftk ' + pdfFile + ' burst output ' + output,
                function (err, stdout, stderr) {
                    if (err) {
                        callback(err);
                    } else {
                        glob(wildcard, function (err, files) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, files);
                            }
                        });
                    }
                });
        }
    });
}

module.exports = {
    split: split
}