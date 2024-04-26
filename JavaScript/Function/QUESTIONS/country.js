function countryLarge(count) {
  let max = 0;
  let curLength = 0;
  let ansIndex = 0;
  for (let i = 0; i < count.length; i++) {
    curLength = country[i].length;
    if (curLength > ansIndex) {
      ansIndex = i;
      max = curLength;
    }
  }
  console.log(count[ansIndex]);
}
let country = ["Australia", "Germany", "United States of America"];
countryLarge(country);
