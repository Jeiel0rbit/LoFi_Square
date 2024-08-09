const audio = new Audio();
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const trackName = document.getElementById('track-name');

const tracks = [
  'http://radio.stereoscenic.com/ama-h',
  'http://radio.stereoscenic.com/ama-s',
  'http://163.172.169.217:80/asp-h',
  'http://radio.stereoscenic.com:80/am-h.mp3',
  'http://163.172.169.217:80/asp-s',
  'http://radio.stereoscenic.com:80/am-s.mp3',
  'http://163.172.169.217:80/asp-l',
  'http://radio.stereoscenic.com:80/am-l.mp3',
];

let currentTrackIndex = 0;

function playTrack(index) {
  audio.src = tracks[index];
  audio.play();
  trackName.textContent = `Playing ${index + 1}`;
  playButton.classList.remove('fa-play');
  playButton.classList.add('fa-pause');
}

function pauseTrack() {
  audio.pause();
  trackName.textContent = 'Pausado';
  playButton.classList.remove('fa-pause');
  playButton.classList.add('fa-play');
}

playButton.addEventListener('click', () => {
  if (audio.paused) {
    playTrack(currentTrackIndex);
  } else {
    pauseTrack();
  }
});

nextButton.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  playTrack(currentTrackIndex);
});

prevButton.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  playTrack(currentTrackIndex);
});

