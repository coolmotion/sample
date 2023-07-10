function animateCountup(elementId, targetValue) {
  let currentValue = 0;
  const duration = 2000; // Animation duration in milliseconds
  const frameRate = 30; // Number of frames per second
  const increment = Math.ceil(targetValue / (duration / (1000 / frameRate)));

  const countupInterval = setInterval(() => {
    if (currentValue >= targetValue) {
      clearInterval(countupInterval);
    } else {
      currentValue += increment;
      document.getElementById(elementId).textContent = currentValue.toLocaleString();
    }
  }, 1000 / frameRate);
}

// Start count-up animations
animateCountup('years-of-experience', 8);
animateCountup('agencies-served', 30);
animateCountup('commercials', 1000);
animateCountup('songs', 1000);