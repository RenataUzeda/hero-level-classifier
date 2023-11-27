function classifyHero() {
     const heroName = document.getElementById('heroName').value;
     const heroXPInput = document.getElementById('heroXP');
     const heroXP = parseInt(heroXPInput.value);
     
     if (isNaN(heroXP)) {
          displayMessage("Por favor, informe a experiência (XP) do Herói.");
          heroXPInput.focus();
          return;
        }
     
     let level;
   
     if (heroXP < 0 || heroXP === "" ){
       level = "Invalid XP! Enter numbers starting from 0 (zero)";
     } else if (heroXP <= 1000) {
       level = 'Iron';
     } else if (heroXP <= 2000) {
       level = 'Bronze';
     } else if (heroXP <= 5000) {
       level = 'Silver';
     } else if (heroXP <= 7000) {
       level = 'Gold';
     } else if (heroXP <= 8000) {
       level = 'Platinum';
     } else if (heroXP <= 9000) {
       level = 'Ascending';
     } else if (heroXP <= 10000) {
       level = 'Immortal';
     } else {
       level = 'Radiant';
     }

     const resultDiv = document.getElementById('result');
     resultDiv.innerHTML = `The Hero named ${heroName} is at level ${level}.`;

}

function displayMessage(message) {
     
     const messageDiv = document.createElement('div');
     messageDiv.style.color = 'red'; 
     messageDiv.textContent = message;
   
     const borderContainer = document.querySelector('.border');
     borderContainer.appendChild(messageDiv);
   
     setTimeout(() => {
       borderContainer.removeChild(messageDiv);
     }, 4000); 
   }