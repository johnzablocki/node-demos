load('application');
var sw = require("../../../site-words");


action('index', function () {
    send(sw.getWord());
});