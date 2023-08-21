window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }
    bulmaSlider.attach();

})
// 
// function updateResultVideo() {
//   var task = document.getElementById("single-menu-replay").value;
//
//   console.log("qpred", "media/results/" + task + ".mp4");
//
//   var video = document.getElementById("result-video");
//   video.src = "media/results/" + task + ".mp4";
//   video.playbackRate = 0.5;
//   video.play();
//
//   var table1 = document.getElementById("result-table");
//   table1.setAttribute("w3-include-html", "result-"+task+".html");
//
//   includeHTML()
// }
