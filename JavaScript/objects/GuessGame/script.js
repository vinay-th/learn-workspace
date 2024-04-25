function guess() {
  let num = Math.floor(Math.random() * 10);
  while (true) {
    let guess = prompt("Enter a number between 1 and 10: ");
    if (guess == num) {
      alert("You guessed correctly!");
    } else if (guess == "quit") {
      alert("You exited the game.");
      break;
    } else {
      alert("You guessed incorrectly!");
    }
  }
}
