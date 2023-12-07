// Obtén todas las tarjetas y el botón de inicio
const cards = document.querySelectorAll('.card');
const playButton = document.getElementById('playButton');

// Agrega un event listener a cada tarjeta
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