console.log("Bài 5: Mảng trong Javascript (array)");

/*
 ! Terms(thuật ngữ):
 * array(mảng)
 * element(phần tử)
 * index(chỉ số)
 * length(độ dài)
*/

//TODO Khai báo array
//* Cách 1
var fruits = ["Banana", "Orange", "Apple", "Mango"];

//* Cách 2
var fruits2 = new Array("Banana", "Orange", "Apple", "Mango");

//! Bản chất của Array trong Javascript là một Object
console.log(typeof fruits); //* Object

//TODO Truy suất dữ liệu
console.log("fruits =", fruits); //* ['Banana', 'Orange', 'Apple', 'Mango']
console.log("fruits.length =", fruits.length); //* 4
console.log("fruits[0] =", fruits[0]); //* Banana
console.log("fruits[1] =", fruits[1]); //* Orange
console.log("fruits[2] =", fruits[2]); //* Apple
console.log("fruits[3] =", fruits[3]); //* Mango

var lastIndex = fruits.length - 1; //* 4 - 1 = 3
console.log("lastIndex =", fruits[lastIndex]); //* fruits[3] = Mango

//TODO Truy xuất vào từng giá trị trong Array
var person = [];
person[0] = "Nguyễn Tiến Đạt";
person[1] = 20;
person[2] = true;
person[3] = [9, 8, 10];

console.log("person =", person); //* ['Nguyễn Tiến Đạt', 20, true, [ 9, 8, 10 ]]
console.log("person[0] =", person[0]); //* Nguyễn Tiến Đạt
console.log("person[1] =", person[1]); //* 20
console.log("person[2] =", person[2]); //* true

console.log("person[3] =", person[3]); //* [9, 8, 10]
console.log("person[3][0] =", person[3][0]); //* 9
console.log("person[3][1] =", person[3][1]); //* 8
console.log("person[3][2] =", person[3][2]); //* 10

//TODO Array nâng cao
var apple = {
  color: "green",
};
var cherry = {
  color: "red",
};
var banana = {
  color: "yellow",
};

var fruits = [apple, cherry, banana];
console.log("fruits =", fruits);
console.log("fruits[0] =", fruits[0]); //* { color: 'green' }
console.log("fruits[0].color =", fruits[0].color); //* green

var contacts = [
  { name: "Dat", phone: 123 },
  { name: "Binh", phone: 456 },
  { name: "Tuan Anh", phone: 789 },
];
console.log("contacts =", contacts);
console.log("contacts[2] =", contacts[2]); //* { name: 'Tuan Anh', phone: 789 }
console.log("contacts[2].name =", contacts[2].name); //* Tuan Anh
