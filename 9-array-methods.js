console.log("Bài 9: Phương thức của mảng (Array methods)");

//! Array.toString()
//TODO Dùng để chuyển từ Array sang chuỗi(string)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var result = fruits.toString();
console.log("result =", result); //* "Banana,Orange,Apple,Mango"

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

//! Array.indexOf()
//TODO Array.indexOf dùng để tìm kiếm một phần tử nào đó có trong mảng Array không.
//* Nếu có tồn tại => trả về chỉ số xuất hiện đầu tiên trong mảng.
//* Nếu không tồn tại => Trả về -1
var fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];

var index = fruits.indexOf("Apple"); //* index = 2
console.log("index =", index);

var index = fruits.indexOf("Kiwi"); //* index = -1
console.log("index =", index);

//! Array.lastIndexOf()
//TODO Array.lastIndexOf dùng để tìm kiếm một phần tử nào đó có trong mảng Array không.
//* Nếu có tồn tại => trả về chỉ số xuất hiện cuối cùng trong mảng.
//* Nếu không tồn tại => Trả về -1
var fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];

var index = fruits.lastIndexOf("Apple"); //* index = 4
console.log("index =", fruits.lastIndexOf("Apple"));

var index = fruits.lastIndexOf("Kiwi"); //* index = -1
console.log("index =", index);

//! Array.includes()
//TODO Array.includes dùng để kiểm tra xem phần tử cần tìm có nằm trong array hay không.
//* Nếu có thì trả về true
//* Nếu không thì trả về false

//? Bài toán
function test(fruit) {
  if (fruit == "apple" || fruit == "strawberry") {
    console.log("red");
  }
}

//* Tối ưu 1
function test1(fruit) {
  var redFruits = ["apple", "strawberry", "cherry", "kiwi"];
  if (redFruits.includes(fruit)) {
    console.log("red");
  }
}

//* Tối ưu 2
function test2(fruit, quantity) {
  const redFruits = ["apple", "strawberry", "cherry", "kiwi"];
  //! condition 1: throw error early
  if (!fruit) {
    console.log("No fruit!");
  }
  //! condition 2: must be red
  if (redFruits.includes(fruit)) {
    console.log("red");
    //! condition 3: must be big quantity
    if (quantity > 10) {
      console.log("big quantity");
    }
  }
}
test2(null);
test2("apple");
test2("apple", 20);
