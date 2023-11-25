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
       level = 'Prata';
     } else if (heroXP <= 7000) {
       level = 'Ouro';
     } else if (heroXP <= 8000) {
       level = 'Platina';
     } else if (heroXP <= 9000) {
       level = 'Ascendente';
     } else if (heroXP <= 10000) {
       level = 'Imortal';
     } else {
       level = 'Radiante';
     }

     const resultDiv = document.getElementById('result');
     resultDiv.innerHTML = `The Hero named ${heroName} is at level ${level}.`;

}

function displayMessage(message) {
     // Criar um elemento para exibir a mensagem na página
     const messageDiv = document.createElement('div');
     messageDiv.style.color = 'red'; // Cor da mensagem (opcional)
     messageDiv.textContent = message;
   
     // Adicionar o elemento à página
     document.body.appendChild(messageDiv);
   
     // Remover a mensagem após alguns segundos (opcional)
     setTimeout(() => {
       document.body.removeChild(messageDiv);
     }, 4000); // Remover após 4 segundos (ajuste conforme necessário)
   }