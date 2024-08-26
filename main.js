function welcomeConfetti() {
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { x: 0, y: 0.5 },
  });
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { x: 1, y: 0.5 },
  });
}
