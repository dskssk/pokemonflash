$(function(){
  const FPS = 1;
  const target = $('.pokemonflash');
  if (target.length === 0) return;
  const switchColor = () => {
    const oldColor = target[0].style.backgroundColor; 
    const newColor = oldColor === 'red' ? 'blue' : 'red';
    target.css('background-color', newColor);
  };
  switchColor();
  window.setInterval(switchColor, 1000 / FPS);
});