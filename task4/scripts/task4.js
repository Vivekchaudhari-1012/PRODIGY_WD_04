var sentence = document.getElementById("animatedSentence");
var text = sentence.innerHTML;
var numIterations = 100; // Set the number of iterations
var currentIteration = 0; // Initialize the current iteration counter

function animateText(index) {
  sentence.innerHTML = text.substring(0, index);

  // Check if there are more characters to display
  if (index < text.length) {
    setTimeout(function() {
      animateText(index + 1); // Recursive call with the next index
    }, 100); // Delay of 100 milliseconds between characters
  } else {
    // Check if there are more iterations to perform
    if (currentIteration < numIterations - 1) {
      // Start a new iteration
      currentIteration++;
      setTimeout(function() {
        animateText(1); // Restart the animation from the beginning
      }, 1000); // Delay of 1000 milliseconds (1 second) between iterations
    }
  }
}

// Start the animation
animateText(0);
