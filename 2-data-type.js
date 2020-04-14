console.log("Bài 2: Kiểu dữ liệu (Data Type)");

//TODO Sử dụng toán tử typeof để tìm kiểu giữ liệu biến
//* Ví dụ 1:
var firstName = "Dat";
//! Biến kiểu string (chuỗi)
console.log("typeof firstName =", typeof firstName); //* String

//* Ví dụ 2:
var age = 20;
//! Biến kiểu number (số)
console.log("typeof age =", typeof age); //* Number

//* Ví dụ 3:
var isMale = true;
//! Biến kiểu boolean (true/false)
console.log("typeof isMale =", typeof isMale); //* Boolean

//* Ví dụ 4:
var student; //* (hoặc var student = undefined)
//! Biến kiểu undefined
console.log("typeof student =", typeof student); //* Undefined

//* Ví dụ 5:
var teacher = null;
//! Biến kiểu null
console.log("typeof teacher =", typeof teacher); //* Object

//* Ví dụ 6: Kiểu Array (dạy sau)
//* Ví dụ 7: Kiểu Object (dạy sau)

//TODO Tự động ép kiểu trong JAVASCRIPT
var info = firstName + " " + age + " " + isMale;
//! Thực hiện ép kiểu biến age (number) =>> age (string), isMale (boolean) =>> isMale (string) rồi nối chuỗi
console.log("info =", info);
console.log("typeof info =", typeof info); //* String

//TODO Đột biến giá trị trong JAVASCRIPT
var age = 20; //! Lúc đầu biến age có giá trị = 10 (number)
age = "twenty"; //! Lúc sau biến age có giá trị = twenty (string)
console.log("age =", age);
console.log("typeof age =", typeof age); //* String
