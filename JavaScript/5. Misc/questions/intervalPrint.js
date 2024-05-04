let id = setInterval(() => {
  console.log("Hello world");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("\ncleared interval");
}, 10000);
