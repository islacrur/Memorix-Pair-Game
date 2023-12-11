const cards = document.querySelectorAll('.card');
const playButton = document.getElementById('playButton');


cards.forEach(card => {
    card.addEventListener('click', () => {
        
        cards.forEach(otherCard => {
            otherCard.classList.remove('selected');
        });

        card.classList.add('selected');
    });
});

playButton.addEventListener('click', () => {
    let selectedCard;
 
    cards.forEach(card => {
        if (card.classList.contains('selected')) {
            selectedCard = card;
        }
    });

    if (selectedCard) {
        const cardId = selectedCard.id;
        switch (cardId) {
            case 'card1':
                window.location.href = 'tablero01.html';
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