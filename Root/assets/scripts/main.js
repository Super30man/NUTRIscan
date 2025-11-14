// 1. Grab all feature cards
const cards = document.querySelectorAll('.feature-card');

// 2. Function to reveal cards on scroll
function revealCards() {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 3. If card is within 100px of viewport bottom, reveal it
    if(cardTop < windowHeight - 100) {
      card.classList.add('show');   // <-- this is the key line
    }
  });
}

// 4. Run on scroll
window.addEventListener('scroll', revealCards);

// 5. Optional: run once on page load
window.addEventListener('load', revealCards);
