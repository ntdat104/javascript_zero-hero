console.log("Bài 9: Phương thức của mảng (Array methods)");

//! Array.toString()
//TODO Dùng để chuyển từ Array sang chuỗi(string)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var result = fruits.toString();
console.log("result =", result); //* Banana,Orange,Apple,Mango

//!  Array.from()
//TODO Dùng để tạo Array từ một chuỗi(string)
var myString = "ABCD";
var myArray = Array.from(myString);
console.log("myArray =", myArray); //* ['A', 'B', 'C', 'D']

//! Array.concat()
//TODO Dùng để nối 2 array lại với nhau
var meat = ["pork", "beef"];
var vegetable = ["potato", "tomato"];
var food = meat.concat(vegetable); //* Nối vegetable vào sau meat
console.log("food =", food); //* ['pork', 'beef', 'potato', 'tomato']

//! Array.push()
//TODO Array.push dùng để thêm giá trị mới vào Array (Thêm vào vị trí sau cùng của Array), sau khi thêm thì trả về length mới của Array đó.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("length =", fruits.push("Kiwi", "Lemon")); //* length = 6
console.log("fruits =", fruits); //* ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Lemon']

//! Array.pop()
//TODO Array.pop dùng để xóa đi phần tử cuối cùng của Array đó, và trả về giá trị phần tử vừa xóa đó.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Phần tử vừa xóa là:", fruits.pop()); //* Mango
console.log("fruits =", fruits); //* ['Banana', 'Orange', 'Apple']

//! Array.unshift()
//TODO Array.unshift thêm giá trị mới vào Array (Thêm vào vị trí đầu tiên của Array), sau khi thêm thì trả về length mới của Array đó.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("length =", fruits.unshift("Kiwi", "Lemon")); //* length = 6
console.log("fruits =", fruits); //* ['Kiwi', 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango']

//! Array.shift()
//TODO Array.shift dùng để xóa đi phần tử đầu tiên của Array đó, và trả về giá trị phần tử vừa xóa đó.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Phần tử vừa xóa là:", fruits.shift()); //* Banana
console.log("fruits =", fruits); //* ['Orange', 'Apple', 'Mango']





