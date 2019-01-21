var video = document.getElementById('video');
var streamId = 'cb66f68442e509b9e46e755d3bc8b05864b50cbd12f44bf10b883fa345b6398b'
var source = 'http://192.168.0.108:8935/stream/' + streamId + '.m3u8'
if(Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(source);
  hls.attachMedia(video);
}

// bind video play to play button
function init(){
  var video = document.getElementById('video')
  document.getElementById('play').onclick=function(){
    video.play()
  };
}
window.onload=init;
