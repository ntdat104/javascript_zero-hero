console.log("Bài 6: Hàm trong Javascript (function)");

//! Hàm là một đoạn chương trình độc lập thực hiện một công việc nào đó.

//* Cách 1:
//TODO Khai báo hàm
function calSum(a, b) {
  //* Hàm tính tổng 2 số a và b
  return a + b;
}
//TODO Gọi hàm và hứng giá trị của hàm trả về
var result = calSum(1, 2); //* Sử dụng biến result để hứng giá trị của hàm.
console.log("result =", result); //* 3

//* Cách 2:
//TODO Khai báo hàm
var calSum2 = function (a, b) {
  return a + b;
};
//TODO Gọi hàm và hứng giá trị của hàm trả về
var result2 = calSum2(3, 4);
console.log("result2 =", result2); //* 7
