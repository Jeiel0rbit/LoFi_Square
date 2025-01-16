const audio = new Audio();
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const trackName = document.getElementById("track-name");
const volumeControl = document.getElementById("volume");
const categorySelect = document.getElementById("category-select");

const categories = {
  Ambientes: [
    "http://radio.stereoscenic.com/ama-h",
    "http://radio.stereoscenic.com/ama-s",
    "http://radio.stereoscenic.com/ama-h",
    "http://radio.stereoscenic.com/asp-h3",
  ],
  Jazz: [
    "http://icecast.radiofrance.fr/fip-midfi.mp3",
    "https://icecast.radiofrance.fr/fipjazz-midfi.mp3",
    "https://icecast.radiofrance.fr/fipgroove-midfi.mp3",
  ],
  Eletronica: [
    "http://nl.ah.fm:8000/live", 
    "http://fr2.ah.fm:8000/live",
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
