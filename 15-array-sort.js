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

//? Bài toán: Sắp xếp tăng dần [1, 2, 3, 4]
var increase = numbers.sort(function (a, b) {
  //! đồng biến (a, b) => (a - b)
  return a - b;
});
console.log("increase =", increase); //* [1, 2, 3, 4]

//? Bài toán: Sắp xếp giảm dần [4, 3, 2, 1]
var decrease = numbers.sort(function (a, b) {
  //! nghịch biến (a, b) => (b - a)
  return b - a;
});
console.log("decrease =", decrease); //* [4, 3, 2, 1]

//? Bài tập: Sắp xếp age tăng dần và giảm dần. (18<19<20) & (20>19>18)
var students = [
  { name: "Dat", age: 20 },
  { name: "Binh", age: 18 },
  { name: "Tuan Anh", age: 19 },
];
//TODO Giải bài tập: Tăng dần
var increase = students.sort(function (a, b) {
  //! đồng biến (a, b) => (a.age - b.age)
  return a.age - b.age;
});
console.log("increase =", increase);

//TODO Giải bài tập: Giảm dần
var decrease = students.sort(function (a, b) {
  //! nghịch biến (a, b) => (b.age - a.age)
  return b.age - a.age;
});
console.log("decrease =", decrease);
