// Recommendation
const thumbnail = document.querySelector(".thumbnail");
const song = document.querySelector(".song");
const artist = document.querySelector(".artist");
const album = document.querySelector(".album");
const spotify = document.querySelector(".spotify");
const refresh = document.querySelector(".refresh");

const loadSong = async () => {
  const json = await fetch("/api/songs.json");
  const songs = await json.json();
  const i = Math.floor(Math.random() * songs.length - 1);

  thumbnail.src = songs[i].thumbnail_medium;
  thumbnail.alt = `${songs[i].name} - ${songs[i].artist}`;
  song.textContent = songs[i].name;
  artist.textContent = songs[i].artist;
  album.textContent = songs[i].album;

  spotify.href = `https://open.spotify.com/track/${songs[i].id}`;
};

refresh.addEventListener("click", (e) => {
  e.preventDefault();
  loadSong();
});

loadSong();

// Particles
particlesJS("header", {
  particles: {
    number: {
      value: 128,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: { value: "#E26417" },
    shape: {
      type: "polygon",
      polygon: { nb_sides: 6 },
    },
    opacity: {
      value: 0.4,
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: true, speed: 1, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#000",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.666,
      direction: "bottom-left",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  retina_detect: true,
});

var update = function () {
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
