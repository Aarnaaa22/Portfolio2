// Number of fishes to create
const fishCount = 8;

// Array of colors for fishes
const colors = ['#FF6F61', '#6BCB77', '#4D96FF', '#FFD93D', '#FF8C42'];

// Helper function to get random number between min and max
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Create and add a fish element to the page
function createFish(index) {
  const fish = document.createElement('div');
  fish.classList.add('fish');
  
  // Pick a random color from the list
  fish.style.background = colors[Math.floor(Math.random() * colors.length)];
  
  // Random vertical position (10% to 90% of viewport height)
  fish.style.top = random(window.innerHeight * 0.1, window.innerHeight * 0.9) + 'px';
  
  // Random animation duration between 10s and 25s
  const duration = random(10, 25);
  
  // Random direction: swimRight or swimLeft
  const direction = Math.random() > 0.5 ? 'swimRight' : 'swimLeft';
  
  // Apply animation to fish
  fish.style.animation = `${direction} ${duration}s linear infinite`;
  
  // Flip horizontally if swimming left
  if (direction === 'swimLeft') {
    fish.style.transform = 'scaleX(-1)';
  }
  
  // Add fish element to the page
  document.body.appendChild(fish);
}

// Create all fishes
for(let i = 0; i < fishCount; i++) {
  createFish(i);
}
