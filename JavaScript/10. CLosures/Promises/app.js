function saveToDB(data, success, faliure) {
  let netSpeed = Math.floor(Math.random() * 11);
  if (netSpeed > 4) success();
  else faliure();
}
saveToDB(
  "wowwwww",
  () => {
    console.log("Data saved successfully");
  },
  () => {
    console.log("Data is not saved");
  }
);
