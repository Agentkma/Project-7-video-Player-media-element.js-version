var supports_video = !!document.createElement('video').canPlayType;
if (supports_video) {


window.onload = function() {

	// Video
	var video = document.getElementById("player1");
  var track = document.getElementById("track");
  var total_time = document.getElementById('total-time');
  var current_Time=document.getElementById('current-time');

	// Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");
  var closedCaptionButton = document.getElementById("captions");

	// Sliders
	// var seekBar = document.getElementById("seek-bar");
	// var volumeBar = document.getElementById("volume-bar");

  // General Variables

//  var play_clicked = '<img src="icons/play-icon.png" alt="play video" />';
	// var pause_clicked = '<img src="icons/pause-icon.png" alt="pause video" />';
	// var mute_clicked= '<img src="icons/volume-off-icon.png" alt="mute video" />';
	// var unmute_clicked = '<img src="icons/volume-on-icon.png" alt="unmute video" />';
  // var transcript_area = document.getElementById('transcript');

//    EVENT LISTENERS

// highlight text below video
video.addEventListener("timeupdate", function() {
			// get video current time
			var value = video.currentTime;

			//remove class highlight from all p elements
			document.querySelector("p").removeClass("highlight");

      if (value <= 7.535 ) {
	    document.getElementById("sentance_1").addClass("highlight");
       }

	    else if (value > 7.535 && value <= 13.96) {
		  document.getElementById("sentance_2").addClass("highlight");
	     }

			else if (value > 13.96 && value <= 17.94) {
		   document.getElementById("sentance_3").addClass("highlight");
		   }

			 else if (value > 17.94 && value <= 30.92) {
 		   document.getElementById("sentance_4").addClass("highlight");
 		   }

			 else if (value> 30.92 && value <= 41.19) {
	 		 document.getElementById("sentance_5").addClass("highlight");
	 		 }

			 else  {
			document.getElementById("sentance_6").addClass("highlight");
			}

		});// END OF transcrit text hightlight


	}; // END Of Window Onload function

} // End of Support Video
