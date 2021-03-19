$(document).ready(function(){
    $('#app').vide({
      mp4: 'video/video.mp4',
      webm: 'video/video.webm',
      ogv: 'video/video.ogv',
      poster: 'img/cover-image.png'
    });

});
$(function(){
	$(".button-primary").fancybox({
		margin: 0,
		padding: 20,
		maxWidth: 400,
		autoScale: true,
		transitionIn: 'none',
		transitionOut: 'none',
		type: 'inline',
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
});
