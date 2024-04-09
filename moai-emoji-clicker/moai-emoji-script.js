let score = 0;
let clickRate = 1;
let texterCost = 10;
let redditUserCost= 100;
let memePosterCost= 1000;
let discordUserCost= 10000;
let easterIslandNativeCost = 100000;
let soggyInsuranceMemberCost = 1000000; 
let moaiCultistCost = 10000000;


function handleClick() {
  score=Math.floor(score+=clickRate);

  updateScoreDisplay();
}

function handleTexterPurchase() {
  if (score >= texterCost) {
    score=Math.floor(score -= texterCost);

    clickRate=clickRate+1;

    texterCost=Math.floor(texterCost *= 1.2);

    updateScoreDisplay();
    updateTexterCost();
  }
}

  function handleRedditUserPurchase() {
    if (score >= redditUserCost) {
      score=Math.floor(score -= redditUserCost);
  
      clickRate=clickRate+2;
  
      redditUserCost=Math.floor(redditUserCost *= 1.2);
  
      updateScoreDisplay();
      updateRedditUserCost();
    }
}

function handleMemePosterPurchase() {
  if (score >= memePosterCost) {
    score=Math.floor(score -= memePosterCost);

    clickRate=clickRate+5;

    memePosterCost=Math.floor(memePosterCost *= 1.2);

    updateScoreDisplay();
    updateMemePosterCost();
  }
}

function handleDiscordUserPurchase() {
  if (score >= discordUserCost) {
    score=Math.floor(score -= discordUserCost);

    clickRate=clickRate+10;

    discordUserCost=Math.floor(discordUserCost *= 1.2);

    updateScoreDisplay();
    updateDiscordUserCost();
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

function updateDiscordUserCost() {
  document.getElementById('discordUserCost').textContent = discordUserCost;
}
function updateMoaiCultistCost() {
  document.getElementById('buyUpgradeCost').textContent = moaiCultistCost;
}

document.getElementById('clickButton').addEventListener('click', handleClick);

document.getElementById('buyTexter').addEventListener('click', handleTexterPurchase);

document.getElementById('buyRedditUser').addEventListener('click', handleRedditUserPurchase)

document.getElementById('buyMemePoster').addEventListener('click', handleMemePosterPurchase)

document.getElementById('buyDiscordUser').addEventListener('click', handleDiscordUserPurchase)

document.getElementById('buyUpgrade').addEventListener('click', handleUpgradePurchase)