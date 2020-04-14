console.log("Bài 12: Array.filter trong Javascript");

//! Array.filter()
//TODO Array.filter dùng để lọc các phần tử theo 1 quy tắc nào đó. (1 đầu vào)
var ages = [16, 18, 25, 32];
//? Bài toán: tạo ra Array mới sao cho giá trị của từng phần tử đều > 20
var result = ages.filter(function (index) {
  return index > 20; //* trả về true hoặc false
});
console.log("result =", result); //* [25, 32]

//? Bài tập: Tạo ra Array mới sao cho giá trị của từng phần tử đều chia hết cho 2
var numbers = [1, 2, 3, 4];

//* Giải bài tập:
var result = numbers.filter(function (index) {
  return index % 2 === 0;
});
console.log("result =", result); //* [2, 4]
