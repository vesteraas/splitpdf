var pdfSplitter = require('.');
var path = require('path');
var assert = require('assert');

var testFile = path.join(__dirname, 'test.pdf');

/*
 * The split() function takes two parameters.  The first parameter is the path of a test file.  The second parameter
 * is a callback function, where the first parameter is the error, if any, and the second parameter is an array of file paths,
 * pointing to the single-page PDFs.
 *
 * The generated single-page PDFs will only exist until your program exits, when they get cleaned up automatically.
 *
 * If you need them, you should copy them elsewhere before your program exits.
 */

pdfSplitter.split(testFile, function (err, files) {
    if (err) {
        throw err;
    } else {
        assert(files && files.length === 3);
    }
});