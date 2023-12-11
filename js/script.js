// Obtén todas las tarjetas y el botón de inicio
/*Aquí estamos obteniendo todas las tarjetas y el botón de inicio del documento HTML. document.querySelectorAll('.card') selecciona todos los elementos con la clase 'card', y document.getElementById('startButton') selecciona el elemento con el ID 'startButton'.*/
const cards = document.querySelectorAll('.card');
const playButton = document.getElementById('playButton');


// Agrega un event listener a cada tarjeta
/*Este bloque de código añade un "event listener" (escucha de eventos) a cada tarjeta. Cuando haces clic en una tarjeta, realiza dos acciones:

Deselecciona todas las tarjetas, eliminando la clase 'selected' de cada una.
Selecciona la tarjeta en la que hiciste clic, añadiendo la clase 'selected'.*/

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Deselecciona todas las tarjetas
        cards.forEach(otherCard => {
            otherCard.classList.remove('selected');
        });

        // Selecciona la tarjeta actual
        card.classList.add('selected');
    });
});

// Agrega un event listener al botón de inicio
/*Este último bloque añade un "event listener" al botón de inicio. Cuando haces clic en el botón, realiza lo siguiente:

Encuentra la tarjeta que está seleccionada entre las tarjetas.
Según la tarjeta seleccionada, redirige a un enlace específico. Cada tarjeta (card1, card2, card3, card4) tiene un enlace asociado. Si no hay ninguna tarjeta seleccionada, muestra una alerta.*/
playButton.addEventListener('click', () => {
    let selectedCard;
    // Encuentra la tarjeta seleccionada
    cards.forEach(card => {
        if (card.classList.contains('selected')) {
            selectedCard = card;
        }
    });

    // Redirige a un enlace específico según la tarjeta seleccionada
    if (selectedCard) {
        const cardId = selectedCard.id;
        switch (cardId) {
            case 'card1':
                window.location.href = 'https://google.com';
                break;
            case 'card2':
                window.location.href = 'https://github.com';
                break;
            case 'card3':
                window.location.href = 'https://enlace-tarjeta3.com';
                break;
            case 'card4':
                window.location.href = 'https://enlace-tarjeta4.com';
                break;
            default:
                alert('Select a level to Play.');
        }
    } else {
        alert('Select a level to Play.');
    }
});