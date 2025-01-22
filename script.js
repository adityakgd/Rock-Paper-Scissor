function rollComputerChoice(callback) {
    const choices = ["rock", "paper", "scissors"];
    let i = 0;
    const rollInterval = setInterval(() => {
      document.getElementById("computer-choice").textContent = `Computer is choosing: ${choices[i]}`;
      i = (
        function startGame() {
          playClickSound(); // Play sound on button click
          gameStarted = true;
          // Show difficulty options and hide the game choices initially
          document.getElementById('difficulty-options').style.display = 'block';
          document.getElementById('game-choices').style.display = 'none';
          document.getElementById('lottery').textContent = 'Select Difficulty to start playing!';
          document.getElementById('scoreboard').style.display = 'none'; // Hide scoreboard initially
        }