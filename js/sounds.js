document.addEventListener("DOMContentLoaded", function () {
    //Este código asegura que el resto del script de JavaScript se ejecute solo después de que la página HTML haya sido completamente cargada.
    var audio = document.getElementById("backgroundAudio");
    var musicOnButton = document.getElementById("musicOnButton");
    var musicOffButton = document.getElementById("musicOffButton");

    musicOnButton.addEventListener("click", function () {
       // manejador de eventos para el botón de encendido. Cuando se hace clic en este botón, se ejecuta la función proporcionada.
        audio.pause();
        musicOnButton.style.display = "none";
        musicOffButton.style.display = "block";
    });

    musicOffButton.addEventListener("click", function () {
        //manejador de eventos para el botón de apagado.
        audio.play();
        musicOnButton.style.display = "block";
        musicOffButton.style.display = "none";
    });
});