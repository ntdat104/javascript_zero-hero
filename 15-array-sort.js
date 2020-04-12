console.log("Bài 15: Array.sort trong Javascript");

//! Array.sort()
//TODO Array.sort dùng để xắp xếp các phần tử trong mảng. (2 đầu vào a,b)
/*
 * syntax: array.sort(function(a, b){ })
 * Nếu function trả về một giá trị < 0 thì a ở trước b
 * Nếu function trả về một giá trị > 0 thì a ở sau b
 * Nếu function trả về một giá trị = 0 thì a và b giữ nguyên
 */
var numbers = [4, 1, 3, 2];

//! [1, 2, 3, 4] tăng dần
var increase = numbers.sort(function (a, b) {
  //* đồng biến (a, b) => (a - b)
  return a - b;
});
console.log("increase =", increase); //* [1, 2, 3, 4]

//! [4, 3, 2, 1] giảm dần
var decrease = numbers.sort(function (a, b) {
  //* nghịch biến (a, b) => (b - a)
  return b - a;
});
console.log("decrease =", decrease);

//? Bài tập
var students = [
  { name: "Dat", age: 20 },
  { name: "Binh", age: 18 },
  { name: "Tuan Anh", age: 19 },
];
//? age: 18<19<20
var increase = students.sort(function (a, b) {
  //* đồng biến (a, b) => (a.age - b.age)
  return a.age - b.age;
});
console.log("increase =", increase);

//? age: 20>19>18
var decrease = students.sort(function (a, b) {
  //* nghịch biến (a, b) => (b.age - a.age)
  return b.age - a.age;
});
console.log("decrease =", decrease);
