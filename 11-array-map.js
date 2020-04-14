console.log("Bài 11: Array.map trong JAVASCRIPT");

//! Array.map()
//TODO Array.map biến đổi các phần tử trong mảng thành các phần tử mới theo 1 quy tắc nào đó. (1 đầu vào)
var numbers = [1, 2, 3, 4, 5];
//? Bài toán: tạo ra Array mới sao cho nó là bình phương của array numbers
var result = numbers.map(function (index) {
  return index * index; //* Trả về 1 giá trị mới
});
console.log("result =", result); //* [1, 4, 9, 16, 25]

//? Bài tập: Dùng array.map để tính tiền của mỗi order.
var orders = [
  { book: 2, price: 50 }, //* order 1
  { book: 5, price: 10 }, //* order 2
  { book: 10, price: 250 }, //* order 3
];

//* Giải bài tập:
var result = orders.map(function (index) {
  return index.book * index.price;
});
console.log("result =", result); //* [100, 50, 2500]
