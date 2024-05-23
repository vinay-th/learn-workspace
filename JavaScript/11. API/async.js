async function greet() {
  //   throw "random error";
  return "Hello";
}
greet()
  .then((result) => {
    console.log("Promise resoled result: ", result);
  })
  .catch((err) => {
    console.log("Promise was not resolved error: ", err);
  });
