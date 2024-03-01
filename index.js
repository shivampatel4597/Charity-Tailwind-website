const images = [
  "images/slider-1.jpg",
  "images/slider-2.jpg",
  "images/slider-3.jpg",
];

let currentIndex = 0;

function imgChange() {
  let imgElement = document.getElementById("myImg");
  imgElement.src = images[currentIndex];

  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(imgChange, 5000);
