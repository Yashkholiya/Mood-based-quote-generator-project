const moodselector = document.getElementById("moodselector");
const quoteGenerator = document.getElementById("quoteGenerator");
const quote = document.getElementById("quote");
const mood = document.getElementById("mood");
const quotesContainer = document.getElementsByClassName("quotesContainer")[0];

const quotes = {
  happy: [
    "Happiness is not out there, it's inside you.",
    "Smile, not because life is perfect, but because you choose to enjoy the ride.",
    "Joy is the simplest form of gratitude.",
    "Today is a good day to be happy for no reason.",
    "Let your happiness be contagious.",
  ],
  sad: [
    "Tears are words the heart can't express.",
    "It's okay to not be okay all the time.",
    "Even the darkest night will end and the sun will rise.",
    "Sadness flies away on the wings of time.",
    "Crying is not a sign of weakness; it's a sign of being human.",
  ],
  stressed: [
    "Take a deep breath—this moment will pass.",
    "You are doing better than you think.",
    "Don't let stress steal your peace.",
    "Pause. Breathe. Reset.",
    "Your calm mind is the ultimate weapon against your challenges.",
  ],
  confused: [
    "Not all those who wander are lost.",
    "Confusion is the first step toward clarity.",
    "It’s okay to not have all the answers right now.",
    "When in doubt, take the next small step.",
    "Sometimes, the fog clears only after we move forward.",
  ],
};

quoteGenerator.addEventListener("click", () => {
  const currentMood = moodselector.value;
  if (!currentMood) {
    alert("kindly select a mood");
    return;
  }

  const currentMoodQuote = quotes[currentMood];
  const randomQuote =
    currentMoodQuote[Math.floor(Math.random() * currentMoodQuote.length)];

  quote.textContent = randomQuote;
  mood.textContent = "mood - " + currentMood;
  quotesContainer.classList.remove("quotesContainerHidden");
});
