const audio = new Audio();
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const trackName = document.getElementById("track-name");
const volumeControl = document.getElementById("volume");
const categorySelect = document.getElementById("category-select");

const categories = {
  Ambientes: [
    "https://radio.stereoscenic.com/ama-h",
    "https://radio.stereoscenic.com/ama-s",
    "https://radio.stereoscenic.com/ama-h",
    "https://radio.stereoscenic.com/asp-h3",
    "https://144.76.106.52:7000/chillout.mp3",
  ],
  Jazz: [
    "https://icecast.radiofrance.fr/fip-midfi.mp3",
    "https://icecast.radiofrance.fr/fipjazz-midfi.mp3",
    "https://streamingv2.shoutcast.com/djdavesessions?icy=https",
    "https://icecast.radiofrance.fr/fipgroove-midfi.mp3",
  ],
  Eletronica: [
    "https://144.76.106.52:7000/electronic.mp3",
    "https://144.76.106.52:7000/psytrance.mp3?type=http&nocache=497905", 
    "http://51.68.153.140:9041/1?type=http&nocache=46415",
    "https://144.76.106.52:7000/techno.mp3?type=http&nocache=498099",
    "https://ice3.somafm.com/groovesalad-128-mp3",
  ],
  Clássica: [
    "https://everestpanel.lowcoststream.com:7135/;?icy=https",
  ],
  Oriental:
  [
    "https://t4.bcbits.com/stream/a02589df14e2b8e781d81f2c203ff5bb/mp3-128/2693102669?p=0&ts=1737120943&t=3b6c9acd5fcd18cd04ef736b415ad8f2926ee2e0&token=1737120943_41d2abae470a59ea22380aae00af4df6206b93bc"
  ],
};

let currentCategory = categories.Ambientes;
let currentTrackIndex = 0;

audio.volume = volumeControl.value;

function playTrack(index) {
  try {
    audio.src = currentCategory[index];
    audio.play();
    trackName.textContent = `Playing ${index + 1}`;
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-pause");
  } catch (error) {
    console.error("Failed to play track:", error);
  }
}

audio.addEventListener('ended', () => {
  if (currentCategory === categories.Oriental) { // Apenas para Oriental
    currentTrackIndex = (currentTrackIndex + 1) % currentCategory.length;
    playTrack(currentTrackIndex); 
  }
});

function pauseTrack() {
  try {
    audio.pause();
    trackName.textContent = "Pausado";
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
  } catch (error) {
    console.error("Failed to pause track:", error);
  }
}

playButton.addEventListener("click", () => {
  if (audio.paused) {
    playTrack(currentTrackIndex);
  } else {
    pauseTrack();
  }
});

nextButton.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % currentCategory.length;
  playTrack(currentTrackIndex);
});

prevButton.addEventListener("click", () => {
  currentTrackIndex =
    (currentTrackIndex - 1 + currentCategory.length) % currentCategory.length;
  playTrack(currentTrackIndex);
});

volumeControl.addEventListener("input", (event) => {
  audio.volume = event.target.value;
});

volumeControl.value = audio.volume;

categorySelect.addEventListener("change", (event) => {
  currentCategory = categories[event.target.value];
  currentTrackIndex = 0;
  playTrack(currentTrackIndex);
});
