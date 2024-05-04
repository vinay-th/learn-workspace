function vowelCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U" ||
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log("Your string has " + vowelCount("VINAY") + " vowels");
