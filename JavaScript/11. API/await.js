function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 11);
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}
