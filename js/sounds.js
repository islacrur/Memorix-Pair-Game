document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("backgroundAudio");
    var musicOnButton = document.getElementById("musicOnButton");
    var musicOffButton = document.getElementById("musicOffButton");

    musicOnButton.addEventListener("click", function () {
        audio.pause();
        musicOnButton.style.display = "none";
        musicOffButton.style.display = "block";
    });

    musicOffButton.addEventListener("click", function () {
        audio.play();
        musicOnButton.style.display = "block";
        musicOffButton.style.display = "none";
    });
});