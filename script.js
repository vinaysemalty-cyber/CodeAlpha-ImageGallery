// ============================
// GRAB THE ELEMENTS WE NEED
// ============================

// The gallery container that holds all the images
const gallery = document.getElementById("gallery");

// The lightbox popup box and the image inside it
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

// The "X" button used to close the lightbox
const closeBtn = document.getElementById("closeBtn");

// ============================
// GET ALL GALLERY IMAGES
// ============================

// This finds every <img> tag that is inside an element with class "gallery-item"
const galleryImages = gallery.querySelectorAll(".gallery-item img");

// ============================
// OPEN THE LIGHTBOX ON CLICK
// ============================

// Loop through every single image in the gallery
galleryImages.forEach(function (image) {

  // Add a "click" event listener to each image
  image.addEventListener("click", function () {

    // Set the lightbox image's source to match the clicked image
    lightboxImg.src = image.src;

    // Also copy the alt text, which is good for accessibility
    lightboxImg.alt = image.alt;

    // Show the lightbox by adding the "active" class (see style.css)
    lightbox.classList.add("active");
  });
});

// ============================
// CLOSE THE LIGHTBOX
// ============================

// Close when the "X" button is clicked
closeBtn.addEventListener("click", function () {
  lightbox.classList.remove("active");
});

// Also close if the user clicks the dark background (outside the image)
lightbox.addEventListener("click", function (event) {
  // "event.target" is the exact element that was clicked.
  // We only close if they clicked the background, not the image itself.
  if (event.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

// Bonus: allow closing the lightbox by pressing the "Escape" key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    lightbox.classList.remove("active");
  }
});
