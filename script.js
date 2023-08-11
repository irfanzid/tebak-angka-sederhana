const numberInput = document.getElementById("number");
const submitButton = document.getElementById("submit");
const resultMessage = document.getElementById("resultMessage");

let computer = generateRandomNumber();
let remainingAttempts = 3;
let gameEnded = false;

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function resetGame() {
  computer = generateRandomNumber();
  remainingAttempts = 3;
  gameEnded = false;
  submitButton.textContent = "Submit";
  resultMessage.textContent = "";
  numberInput.value = "";
  submitButton.removeEventListener("click", resetGame);
  submitButton.addEventListener("click", checkGuess);
}

function checkGuess(event) {
  event.preventDefault();

  const inputValue = parseInt(numberInput.value);

  if (inputValue === computer) {
    resultMessage.textContent = `Selamat tebakan Anda Benar. Komputer memilih angka ${computer}.`;
    gameEnded = true;
  } else {
    resultMessage.textContent = `${hasil()}. Sisa kesempatan: ${remainingAttempts - 1}`;
  }

  function hasil() {
    if (inputValue < computer && inputValue >= 0) {
      return "Tebakan Anda terlalu kecil";
    } else if (inputValue > computer && inputValue <= 10) {
      return "Tebakan Anda terlalu besar";
    } else {
      return "Masukan Angka 1-10";
    }
  }

  remainingAttempts--;

  if (remainingAttempts === 0 || gameEnded) {
    resultMessage.textContent += ` Anda memilih angka ${computer}.`;
    submitButton.textContent = "Try Again";
    submitButton.removeEventListener("click", checkGuess);
    submitButton.addEventListener("click", resetGame);
  }
}

submitButton.addEventListener("click", checkGuess);
