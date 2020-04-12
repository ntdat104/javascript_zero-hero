console.log("Bài 13: Array.find trong Javascript");

//! Array.find()
//TODO Array.find dùng để tìm phần tử theo một quy tắc nào đó, nếu tìm được thì trả về 1 phần tử rồi dừng lại. (1 đầu vào)
var numbers = [1, 2, 3, 4];
//? Tìm số đầu tiên chia hết cho 2 trong mảng numbers
var result = numbers.find(function (x) {
  return x % 2 === 0;
});
console.log("result =", result); //* 2
