
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.words = function(req, res) {
	var sw = require("../../site-words");
	res.send(sw.getWord());
};