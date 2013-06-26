var cscs = (function (cscs, id, undefined) {
	var $ = $ || function (id) { return document.getElementById(id); };
	
    cscs.load = function(content) {
        $(id).innerHTML = markdown.toHTML(lib.readFromURL(content));
    };

    cscs.start = function() { cscs.load("index.md"); };

    // load the first page when we 
    if(document.addEventListener)
        document.addEventListener("DOMContentLoaded", cscs.start);

	return cscs;
})(cscs || {}, "content");
