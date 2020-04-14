console.log("Bài 4: Đối tượng trong Javascript (Object)");

var person = {
  firstName: "Dat",
  lastName: "Nguyễn",
  age: 20,
  isMale: true,
};

//TODO Truy suất dữ liệu
//* Cách 1:
console.log("person =", person);
console.log("person.firstName =", person.firstName); //* Dat
console.log("person.age =", person.age); //* 20
console.log("person.isMale =", person.isMale); //* true

//* Cách 2:
console.log("person =", person);
console.log("person['firstName'] =", person["firstName"]); //* Dat
console.log("person['age'] =", person["age"]); //* 20
console.log("person['isMale'] =", person["isMale"]); //* true

//TODO Đột biến giá trị
person.age = 18; //* hoặc person["age"] = 18
person.isMale = false; //* hoặc person["isMale"] = false
console.log("person =", person);
