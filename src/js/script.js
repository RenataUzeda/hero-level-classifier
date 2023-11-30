function classifyHero() {
  const heroName = document.getElementById("heroName").value;
  const heroXP = parseInt(document.getElementById("heroXP").value);

  if (!heroName) {
    displayMessage("Por favor, informe o nome do herói.");
    document.getElementById("heroName").focus();
    return;
  }

  if (!heroXP) {
    displayMessage("Por favor, informe a experiência (XP) do herói.");
    document.getElementById("heroXP").focus();
    return;
  }

  let level;

  if (heroXP < 0) {
    level = "Invalid XP! Enter numbers starting from 0 (zero)";
  } else if (heroXP <= 1000) {
    level = "Iron";
  } else if (heroXP <= 2000) {
    level = "Bronze";
  } else if (heroXP <= 5000) {
    level = "Silver";
  } else if (heroXP <= 7000) {
    level = "Gold";
  } else if (heroXP <= 8000) {
    level = "Platinum";
  } else if (heroXP <= 9000) {
    level = "Ascending";
  } else if (heroXP <= 10000) {
    level = "Immortal";
  } else {
    level = "Radiant";
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `The Hero named <span class="hero-name">${heroName.toUpperCase()}</span> is at level <span class="hero-XP">${level}</span>.`;
  resultDiv.classList.add("visible");
}

function displayMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;

  messageDiv.classList.add("message");

  const borderContainer = document.querySelector(".border");
  borderContainer.appendChild(messageDiv);

  setTimeout(() => {
    borderContainer.removeChild(messageDiv);
  }, 4000);
}
