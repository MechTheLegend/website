let score = 0;

function handleClick() {
  score++;

  document.getElementById('scoreValue').textContent = score;
}

document.getElementById('clickerButton').addEventListener('click', handleClick);


