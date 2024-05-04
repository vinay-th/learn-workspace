const classInfo = {
  vinay: {
    name: "Vinay Thakor",
    city: "Ahmadabad",
  },
  niomi: {
    name: "Niomi Langaliya",
    city: "Bhavanagr",
  },
  vansh: {
    name: "Vansh Vora",
    city: "Ahmadabad",
  },
};
console.log(classInfo);
console.log(classInfo.vinay.city);
classInfo.vinay.city = "Texas";
console.log(classInfo.vinay.city);
