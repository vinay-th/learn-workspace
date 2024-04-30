const student = {
  name: "Vinay",
  id: 223,
  cgpa: 4,
  getName: function () {
    console.log(this.name); //normal func iska baap student obj hoga kyuki use usse bulaya
  },
  getId: () => {
    console.log(this.id); //iska output pura window obj hai kyuki yeh baap ka baap dekta hai
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //iska output student obj hai kyuki yeh baap(function(getInfo1)) ke baapko(student obj) dekhta hai
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); //iska output pura windows obj hai kyuki yeh sirf baapko dekhta hai yaha pr timeout ka baap window hoga na meri jaan
    }, 2000);
  },
};
student.getName();
student.getId();
student.getInfo1();
student.getInfo2();
