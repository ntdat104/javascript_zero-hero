console.log("Bài 6: Hàm trong Javascript (function)");

//* Hàm là một đoạn chương trình độc lập thực hiện một công việc nào đó.

//? Cách 1:
//! Khai báo hàm
function calSum(a, b){ //TODO Hàm tính tổng 2 số a và b
    return a + b;
}
//! Gọi hàm và hứng giá trị
var result = calSum(1, 2); //* Sử dụng biến result để hứng giá trị của hàm.
console.log("result =", result);

//? Cách 2:
//! Khai báo hàm
var calSum2 = function(a, b){
    return a + b;
}
//! Gọi hàm và hứng giá trị
var result2 = calSum2(3, 4);
console.log("result2 =", result2);