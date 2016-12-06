// Wait till the browser is ready to render the game (avoids glitchii)
window.requestAnimationFrame(function () {
  new GameManager(6, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
