window.addEventListener('DOMContentLoaded', function() {
  const FPS = 30;
  const target: HTMLElement[] = [].slice.call(document.querySelectorAll('.pokemonflash'));
  if (target.length === 0) return;
  window.setInterval(() => {
    const oldColor = target[0].style.backgroundColor; 
    const newColor = oldColor === 'red' ? 'blue' : 'red';
    target.forEach(v => v.style.backgroundColor = newColor);
  }, 1000 / FPS);
});