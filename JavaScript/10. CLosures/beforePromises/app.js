function saveToDB(data, success, faliure) {
  let netSpeed = Math.floor(Math.random() * 11);
  if (netSpeed > 4) success();
  else faliure();
}
saveToDB(
  "wowwwww",
  () => {
    console.log("Success1: Data saved");
    saveToDB(
      "hello",
      () => {
        console.log("Success2: Data saved");
        saveToDB(
          "noob",
          () => {
            console.log("Success3: Data saved");
          },
          () => {
            console.log("Fail3: Data is not saved");
          }
        );
      },
      () => {
        console.log("Fail2: Data is not saved");
      }
    );
  },
  () => {
    console.log("Fail1: Data is not saved");
  }
);
