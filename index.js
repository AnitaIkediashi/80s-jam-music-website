// menu btn working js
const menuBtn = document.querySelector("#menu-btn");
const navBar = document.querySelector(".navbar");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
})
//swiper working js
var swiper = new Swiper(".genre-slider", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
    }
});

var swiper = new Swiper(".artist-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
    }
});

var swiper = new Swiper(".album-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
    }
});

// audio working js
const songList = document.querySelector(".song-list");
const audio = document.querySelector("#audio");
const title = document.querySelector("#title");
const playPauseBtn = document.querySelector("#play-pause-btn");
const progress = document.querySelector(".progress");

let songArray = [];
let songHeading = '';
let songIndex = 0;
let isPlaying = false;

//loading the first song title into an empty string
function loadAudio() {
  audio.src = songArray[songIndex];
  let songListItems = songList.getElementsByTagName("li");
  songHeading = songListItems[songIndex].getAttribute("data-name");
  title.innerText = songHeading;
  //to get the active class
  for (i = 0; i < songListItems.length; i++) {
    songListItems[i].classList.remove("active");
  };
  songList.getElementsByTagName("li")[songIndex].classList.add("active");
};

//loading songs into an empty array
function loadSongs() {
  let songs = songList.getElementsByTagName("li");
  for (i = 0; i < songs.length; i++) {
    songArray.push(songs[i].getAttribute("data-src"));
  };
  loadAudio();
};
loadSongs();

//play and pause audio using the audio api
function playAudio() {
  audio.play();
  playPauseBtn.src = "images/pause.png";
  isPlaying = true;
};
function pauseAudio() {
  audio.pause();
  playPauseBtn.src = "images/play.png";
  isPlaying = false;
};
//creating event listeners for play and pause btn
playPauseBtn.addEventListener('click', () => {
  //using if statement
  if(isPlaying) {
      pauseAudio();
  } else {
      playAudio();
  };
});

//creating click event for each item in the list
songList.addEventListener('click', (e) => {
  songIndex = e.target.closest("li").getAttribute("data-index");
  loadAudio();
  playAudio();
});

//creating a progress working js for the progress bar
audio.addEventListener('timeupdate', (e) => {
  //destructing varaibles
  let {currentTime, duration} = e.srcElement;
  let progressPercent = (currentTime/duration) * 100;
  progress.style.width = `${progressPercent}%`;
});
//when the audio has ended
audio.addEventListener('ended', () => {
  playPauseBtn.src = "images/play.png";
});