const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');

// Music
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Base Guitar Freestyle',
    artist: 'Rose Archer',
  },
  {
    name: 'jacinto-3',
    displayName: 'Jazz Music (Remix)',
    artist: 'Jacinto Design/Martin',
  },
  {
    name: 'jacinto-4',
    displayName: 'Lofi Chill Beats',
    artist: 'John Carter',
  },
];

// Check if Playing
let isPlaying = false;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseSong() {
  isPlaying = false;
  music.pause();
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
}

// Play or pause event listener
playBtn.addEventListener('click', () => {
  isPlaying ? pauseSong() : playSong();
});

// Update the DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// current song
let songIndex = 0;

// previous song function
function prevSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadSong(songs[songIndex]);
  playSong();
}

// next song function
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0;
  loadSong(songs[songIndex]);
  playSong();
}

// on load select first song
loadSong(songs[songIndex]);

// update progress bar and time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;

    // Update the progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
