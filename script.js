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
	
	$('#slider').change(function(event) {
		console.log(document.querySelector('#slider').value);
		$(".marquee-inner.to-left").css("animation-duration", 300 - document.querySelector('#slider').value + "s")
	});
});
	
function clearSWCache() {
	if ('serviceWorker' in navigator) {
	  caches.keys().then(function(cacheNames) {
		cacheNames.forEach(function(cacheName) {
		  caches.delete(cacheName);
		});
	  });
	}
}

// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
  }, function() {
    console.log('CLIENT: service worker registration failure.');
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}
