// JavaScript para el lightbox

document.addEventListener("DOMContentLoaded", function() {
    const lightboxLinks = document.querySelectorAll(".lightbox-link");
    const lightboxOverlay = document.getElementById("lightboxOverlay");
    const lightboxContainer = document.getElementById("lightboxContainer");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");
    const prevImageBtn = document.getElementById("prevImage");
    const nextImageBtn = document.getElementById("nextImage");
    const imageCounter = document.getElementById("imageCounter");
    let currentImageIndex = 0;

    lightboxLinks.forEach(function(link, index) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            currentImageIndex = index;
            updateImageCounter();
            const imageUrl = this.getAttribute("href");
            lightboxImage.setAttribute("src", imageUrl);
            lightboxOverlay.style.display = "block";
            lightboxContainer.style.display = "flex";
        });
    });

    closeLightbox.addEventListener("click", function() {
        lightboxOverlay.style.display = "none";
        lightboxContainer.style.display = "none";
    });

    prevImageBtn.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex - 1 + lightboxLinks.length) % lightboxLinks.length;
        updateImage();
    });

    nextImageBtn.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex + 1) % lightboxLinks.length;
        updateImage();
    });

    function updateImage() {
        const imageUrl = lightboxLinks[currentImageIndex].getAttribute("href");
        lightboxImage.setAttribute("src", imageUrl);
        updateImageCounter();
    }

    function updateImageCounter() {
        imageCounter.textContent = `${currentImageIndex + 1} / ${lightboxLinks.length}`;
    }
});
