let data = '{"fact":"A cat cannot see directly under its nose.","length":41}';
console.log(JSON.parse(data));
console.log(JSON.parse(data).fact);
let rawData = JSON.parse(data);
let jsonData = JSON.stringify(rawData);
console.log(jsonData);
