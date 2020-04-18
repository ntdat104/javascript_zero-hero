console.log("Bài 16: Sử dụng key word 'new'");

var today = new Date();
console.log("Today =", today);

//! nomal function
var mouse = {
  weight: 0.2,
  getWeight: function () {
    return this.weight;
  },
};

//! contructor function
//* function Student(){ };
//* var student_1 = new Student();
function Student(name, age) {
  this.job = "student";
  this.name = name;
  this.age = age;
}

//! use "new"
var student_1 = new Student("Dat", 20);
var student_2 = new Student("Quynh", 21);
var student_3 = new Student("Tuan", 21);
var student_4 = new Student("Tien", 20);

console.log("student_1 =", student_1);
console.log("student_2 =", student_2);
console.log("student_3 =", student_3);
console.log("student_4 =", student_4);

//TODO Thực hành mèo và chuột
var cat = {
  name: "Tom",
  stomach: [],
  eat: function (mouse) {
    this.stomach.push(mouse);
    return this;
  },
};

function setMouse(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
}

var jerry1 = new setMouse("jerry1", "Màu Xanh", 20);
var jerry2 = new setMouse("jerry2", "Màu Đỏ", 25);
var jerry3 = new setMouse("jerry3", "Màu Vàng", 30);

cat.eat(jerry1).eat(jerry2).eat(jerry3);
//* Gọi nhiều lần trong 1 object bởi vì return this.
//! Method chaining.

console.log("Tom = ", cat);
