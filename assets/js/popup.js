$(document).ready(function() {
  // Create video element
  const video = document.createElement('video');
          video.classList.add('player');
          video.id = "player";
  document.querySelectorAll('.modal-body')[0].appendChild(video);
  const player = new Plyr('.player');
// Gets the video src from the data-src on each button
var $videoSrc;  
$('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
      $videoType = $(this).data( "type" );
            player.source = {
                type: 'video',
                sources: [
                    {
                        src: $videoSrc,
                        provider: $videoType,
                    },
                ],
            };
});
console.log($videoSrc);

// Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
   // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player = new Plyr('#player');
  
  // Expose
  window.player = player;
});

// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    //$("#video").attr('src',$videoSrc); 
    player.stop();
});
    
  
// document ready  
});


