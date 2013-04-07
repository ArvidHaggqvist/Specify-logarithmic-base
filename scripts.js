/* IMPORTANT: The results provided when using this program for calculation are not guaranteed to be correct, because the fact that not all decimal numbers can be accurately represented in binary */
(function(){


	function log10(val) {
	  return Math.log(val) / Math.LN10;
	}
	function logBase(base, val) {
	    var result = log10(val) / log10(base);
	    return Math.round(result * 1000) / 1000 ;
	}

	$("form").submit(function(e) {
		e.preventDefault();

		var base = $(".base").val(),
			val = $(".value").val();

		alert(logBase(base, val));

	});


})()
