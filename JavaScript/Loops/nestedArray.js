let superheros = [
  ["Ironman", "Thor", "Spiderman", "Captain America"],
  ["Superman", "Batman", "Wonder Woman"],
];
for (let i = 0; i < superheros.length; i++) {
  console.log(`List${i + 1}`);
  for (let j = 0; j < superheros[i].length; j++) {
    console.log(superheros[i][j]);
  }
}
