document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.video-MV');

    window.addEventListener('scroll', function () {
        var videoPosition = video.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (videoPosition < windowHeight * 0.7) { // Reproduce el video cuando está a la mitad de la ventana
            video.play();
        } else {
            video.pause();
        }
    });
});

// let copy = document.querySelector(".logos-slide").cloneNode(true);
// document.querySelector(".logos_foter").appendChild(copy);
