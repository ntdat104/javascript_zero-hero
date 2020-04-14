console.log("Bài 3: Toán tử trong JAVASCRIPT (Operator)");

//TODO Tổng hợp toán tử trong JAVASCRIPT
/*
 * x = y // x = y //* (Toán tử gán)
 * x += y // x = x + y //* (Cộng xong rồi gán)
 * x -= y // x = x - y //* (Trừ xong rồi gán)
 * x *= y // x = x * y //* (Nhân xong rồi gán)
 * x /= y // x = x / y //* (Chia xong rồi gán)
 * x % y // x = x % y //* (Chia lấy dư xong rồi gán)
 * x ** y // x = x ** y //* (Lũy thừa y xong rồi gán)
 * x++ // x = x + 1 //* (Cộng một xong rồi gán) !! Lấy giá trị trước rồi cộng sau
 * x-- // x = x - 1 //* (Trừ xong rồi gán) !! Lấy giá trị trước rồi trừ sau
 * ++x //* (Cộng trước rồi gán sau)
 * --x //* (Trừ trước rồi gán sau)
 */

//* Ví dụ 1:
var number1 = 50;
var number2 = 150;
var average = (number1 + number2) / 2;
console.log("average =", average); //* 100

//* Ví dụ 2:
var a, b, sum;
a = 5;
b = 10;
sum = a++ * b-- + --a * ++b;
/*
 * a++ * b-- + --a * ++b; //! a = 5, b = 10
 * 5   * b-- + --a * ++b; //! a = 6, b = 10
 * 5   * 10  + --a * ++b; //! a = 6, b = 9
 * 5   * 10  + 5   * ++b; //! a = 5, b = 9
 * 5   * 10  + 5   * 10 ; //! a = 5, b = 10
 *     50    +    50    ; //! a = 5, b = 10
 */
console.log("sum = ", sum); //* 100

//TODO Toán tử so sánh
//* >,<,=,>=,<=,==,===,!=,!==,!
//! Tất cả các giá trị so sánh đều trả về true hoặc false

//* Ví dụ:
var age = 20;
console.log("age =", age); //* 20
console.log("age >= 20", age >= 20); //* true
console.log("age > 30", age > 30); //* false
console.log("!(age > 30)", !(age > 30)); //* true

console.log("20 <= age && age < 30", 20 <= age && age < 30); //* true
console.log("age >= 20 || age < 10", age >= 20 || age < 10); //* true
