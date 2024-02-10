let score = 0;
let clickRate = 1;
let texterCost = 50;

function handleClick() {
  score=Math.floor(score+=clickRate);

  updateScoreDisplay();
}

function handleTexterPurchase() {
  if (score >= texterCost) {
    score=Math.floor(score -= texterCost);

    clickRate++;

    texterCost=Math.floor(texterCost *= 1.5);

    updateScoreDisplay();
    updateTexterCost();
  }
}

function updateScoreDisplay() {
  document.getElementById('scoreValue').textContent = score;
}

function updateTexterCost() {
  document.getElementById('texterCost').textContent = texterCost;
}

document.getElementById('clickButton').addEventListener('click', handleClick);

document.getElementById('buyTexter').addEventListener('click', handleTexterPurchase);
