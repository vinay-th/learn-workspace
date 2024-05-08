function print(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("You gave me: " + args[i]);
  }
}
console.log(print(1, 2, 3, 4));
