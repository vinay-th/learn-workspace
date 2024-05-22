function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let netSpeed = Math.floor(Math.random() * 11);
    if (netSpeed > 4) resolve("success: data saved");
    else reject("failure: data not saved");
  });
}

// let request = saveToDB("Vinay");
// request
//   .then(() => {
//     console.log("Request was resolved.");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("Request was rejected.");
//     console.log(request);
//   });

// saveToDB("vinay")
//   .then(() => {
//     console.log("Promise1: promise resolved");
//     saveToDB("niomi").then(() => {
//       console.log("Promise2: promise resolved");
//       saveToDB("oreo").then(() => {
//         console.log("Promise3: promise resolved");
//       });
//     });
//   })
//   .catch(() => {
//     console.log("promise rejected");
//   });

saveToDB("vinay")
  .then(() => {
    console.log("Promise1: data stored");
    return saveToDB("niomi");
  })
  .then(() => {
    console.log("Promise2: data stored");
    return saveToDB("oreo");
  })
  .then(() => {
    console.log("Promise2: data stored");
  })
  .catch(() => {
    console.log("promise rejected");
  });
