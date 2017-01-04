$(function(){
  const FPS = 1;
  const target = $('.pokemonflash');
  if (target.length === 0) return;
  window.setInterval(() => {
    const oldColor = target[0].style.backgroundColor; 
    const newColor = oldColor === 'red' ? 'blue' : 'red';
    target.css('background-color', newColor);
  }, 1000 / FPS);
});