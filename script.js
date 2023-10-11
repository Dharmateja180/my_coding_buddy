
//login.html

document.addEventListener("DOMContentLoaded", function () {
  // JavaScript code for handling the "Log In" button click event

  // Get the "Log In" button element by its ID
  const loginButton = document.getElementById("loginButton");

  // Add a click event listener to the button
  loginButton.addEventListener("click", function () {
    // Redirect to the roadmap.html file
    window.location.href = "roadmap.html";
  });
});



// Function to check the progress and update the roadmap
function updateRoadmapProgress() {
  // Check the status of each checkbox and update the roadmap
  const arrayQuestion1 = document.getElementById('array-question1').checked;
  const arrayQuestion2 = document.getElementById('array-question2').checked;
  const stringsQuestion1 = document.getElementById('strings-question1').checked;
  const stringsQuestion2 = document.getElementById('strings-question2').checked;

  // Calculate the total progress
  const totalQuestions = 4; // Update this if you add more questions
  const completedQuestions = [arrayQuestion1, arrayQuestion2, stringsQuestion1, stringsQuestion2].filter(checked => checked).length;
  const progressPercentage = (completedQuestions / totalQuestions) * 100;

  // Update the progress on the roadmap page
  document.getElementById('progress-bar').style.width = progressPercentage + '%';
  document.getElementById('progress-text').textContent = `${completedQuestions} out of ${totalQuestions} questions completed`;
}

// Add event listeners to checkboxes
document.getElementById('array-question1').addEventListener('change', updateRoadmapProgress);
document.getElementById('array-question2').addEventListener('change', updateRoadmapProgress);
document.getElementById('strings-question1').addEventListener('change', updateRoadmapProgress);
document.getElementById('strings-question2').addEventListener('change', updateRoadmapProgress);

// Initial update when the page loads
updateRoadmapProgress();

  