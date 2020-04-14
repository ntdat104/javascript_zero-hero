console.log("Bài 7: Các phương thức của đối tượng (object methods)");

//! Object methods là các phương thức, hành động mà đối tượng đó có thể làm

//* Cách 1:
var person = {
  name: "Dat",
  age: 20,
  sing: function () {
    //! object method
    console.log("I am singing, my name is", this.name); //! this = person
  },
};

console.log("person =", person);
console.log("person.name =", person.name); //* Dat
person.sing();

//* Cách 2:
//! Khai báo hàm
function bark() {
  console.log("I am barking, my name is", this.name);
}
var person2 = {
  name: "Binh",
  age: 20,
  bark: bark, //! truyền vào địa chỉ của hàm
};

console.log("person2 =", person2);
console.log("person2.name =", person2.name); //* Binh
person2.bark();
