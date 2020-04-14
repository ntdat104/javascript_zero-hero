console.log("Bài 13: Array.find trong Javascript");

//! Array.find()
//TODO Array.find dùng để tìm phần tử theo một quy tắc nào đó,
//TODO nếu tìm được thì trả về phần tử đầu tiên tìm thấy rồi dừng lại. (1 đầu vào)
var numbers = [1, 2, 3, 4];
//? Bài toán: tìm số đầu tiên trong mảng numbers chia hết cho 2
var result = numbers.find(function (x) {
  return x % 2 === 0;
});
console.log("result =", result); //* 2
