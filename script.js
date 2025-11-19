let steps = 0;
let calories = 0;
let distance = 0;
const dailyGoal = 10000;

function addSteps() {
  const input = document.getElementById('inputSteps');
  const newSteps = parseInt(input.value);

  if (isNaN(newSteps) || newSteps <= 0) {
    alert('Please enter a valid number of steps!');
    return;
  }

  steps += newSteps;
  calories = Math.round(steps * 0.04);
  distance = (steps * 0.0008).toFixed(2);

  document.getElementById('steps').textContent = steps;
  document.getElementById('calories').textContent = calories;
  document.getElementById('distance').textContent = distance;

  updateProgress();
  input.value = '';
}

function updateProgress() {
  const progress = Math.min((steps / dailyGoal) * 100, 100);
  document.getElementById('progress').style.width = progress + '%';
  document.getElementById('progressText').textContent = `${progress.toFixed(1)}% of goal reached`;
}
