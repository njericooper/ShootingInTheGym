const player = document.querySelector('.player');
const video = player.querySelector('.view');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('toggle');
const skipButtons = player.querySelectrAll('[data-skip]');
const ranges = player.querySelectrAll('.player__slider');

function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton(){
  const icon = this.pause ? '' : '';
  console.log(icon);
  toggle.textContent = icon;
}

function skip(){
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
  
}

  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);

  toggle.addEventListener('click', togglePlay);
