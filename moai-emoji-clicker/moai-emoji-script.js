let score = 0;
let clickRate = 1;
let texterCost = 50;
let redditUserCost= 100;
let memePosterCost= 500;
let discordUserCost= 1000;
let easterIslandNativeCost = 2500;
let soggyInsuranceMemberCost = 5000;
let moaiCultistCost = 10000;

function handleClick() {
  score=Math.floor(score+=clickRate);

  updateScoreDisplay();
}

function handleTexterPurchase() {
  if (score >= texterCost) {
    score=Math.floor(score -= texterCost);

    clickRate=clickRate+1;

    texterCost=Math.floor(texterCost *= 1.5);

    updateScoreDisplay();
    updateTexterCost();
  }
}

  function handleRedditUserPurchase() {
    if (score >= redditUserCost) {
      score=Math.floor(score -= redditUserCost);
  
      clickRate=clickRate+2;
  
      redditUserCost=Math.floor(redditUserCost *= 1.5);
  
      updateScoreDisplay();
      updateRedditUserCost();
    }
}

function handleMemePosterPurchase() {
  if (score >= memePosterCost) {
    score=Math.floor(score -= memePosterCost);

    clickRate=clickRate+5;

    memePosterCost=Math.floor(memePosterCost *= 1.5);

    updateScoreDisplay();
    updateMemePosterCost();
  }
}

function updateScoreDisplay() {
  document.getElementById('scoreValue').textContent = score;
}

function updateTexterCost() {
  document.getElementById('texterCost').textContent = texterCost;
}

function updateRedditUserCost() {
  document.getElementById('redditUserCost').textContent = redditUserCost;
}

function updateMemePosterCost() {
  document.getElementById('memePosterCost').textContent = memePosterCost;
}

document.getElementById('clickButton').addEventListener('click', handleClick);

document.getElementById('buyTexter').addEventListener('click', handleTexterPurchase);

document.getElementById('buyRedditUser').addEventListener('click', handleRedditUserPurchase)

document.getElementById('buyMemePoster').addEventListener('click', handleMemePosterPurchase)