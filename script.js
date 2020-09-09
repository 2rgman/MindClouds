jQuery.expr.filters.offscreen = function(el) {
  var rect = el.getBoundingClientRect();
  return (
           (rect.x + rect.width) < 0 
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
         );
};
$(document).ready(function(){
    $('#maindiv').width($('#div1').width());
	var x = document.getElementById("div1");
	var t=setInterval(function () {
		// your event handler
		$(':offscreen').find("input[type=text], textarea").val("");
	},1000);

});