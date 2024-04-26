function concatStr(str) {
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    str2 += str[i];
    str2 += ", ";
  }
  return str2;
}
let str = [
  "Hello World",
  "I'm Vinay",
  "I'm a Software Engineer",
  "I'm completing web dev",
];
let str2 = concatStr(str);
console.log(str2);
