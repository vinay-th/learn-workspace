let favMovie = "Interstellar";
let guess = prompt("What is my favorite movie?");
while (guess != favMovie) {
  if (guess == "Quit") {
    alert("You have quit the game");
    break;
  } else {
    alert("You have guessed it wrong try again");
    guess = prompt("What is my favorite movie?");
  }
}
if (guess == favMovie) {
  alert("You have guessed it right");
}
