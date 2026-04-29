const letters = document.querySelectorAll('.name span');

letters.forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.05}s`;

  letter.addEventListener('mouseenter', () => {
    letter.style.color = '#d4af37';
  });

  letter.addEventListener('mouseleave', () => {
    letter.style.color = '';
  });
});
