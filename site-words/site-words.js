var siteWords = ["after", "again", "an", "any", "as", "ask", "by", "could", "every", "fly",
							"from", "give", "going", "had", "has", "his", "how", "just", "know", "let", 
							"live", "may", "of", "old", "once", "open", "over", "put", "round", "some", 
							"stop", "take", "thank", "then", "them", "then", "think", "walk", "where", "when"];
							
exports.getWord = function() {
	var rnd = Math.ceil(Math.random()*siteWords.length);
	return { "word" : siteWords[rnd] };
}