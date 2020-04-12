console.log("Bài 14: Array.reduce trong Javascript");

//! Array.reduce() cơ bản, không có init
//TODO Array.reduce dùng để giảm các phần tử (2 đầu vào)

//* VD1
var numbers = [1, 2, 3, 4];
var result = numbers.reduce(function (x, y) {
  console.log("x = " + x, "y = " + y);
  return x + y;
}); //! không có init
console.log("result =", result); //* 10

//* VD2
var orders = [
  { name: "Dat", quatity: 2, unitPrice: 250 },
  { name: "Binh", quatity: 1, unitPrice: 400 },
  { name: "Tuan Anh", quatity: 5, unitPrice: 20 },
];
//? Dùng reduce để tính tổng của đơn hàng
//TODO Giải bài tập
var prices = orders.map(function (index) {
  return index.quatity * index.unitPrice;
});
var result = prices.reduce(function (x, y) {
  return x + y;
}); //! không có init
console.log("result =", result); //* 1000

//! Array.reduce() nâng cao, có init
//* VD1
var numbers = [1, 2, 3, 4];
var result = numbers.reduce(function (x, y) {
  console.log("x = " + x, "y = " + y);
  return x + y;
}, 0); //! thêm tham số thứ 2 là init = 0.
console.log("result = ", result); //* 10

//* VD2
var orders = [
  { name: "Dat", quatity: 2, unitPrice: 250 },
  { name: "Binh", quatity: 1, unitPrice: 400 },
  { name: "Tuan Anh", quatity: 5, unitPrice: 20 },
];
//? Dùng reduce để tính tổng của đơn hàng
//TODO Giải bài tập
var result = orders.reduce(function (x, y) {
  return x + y.quatity * y.unitPrice;
}, 0); //! thêm tham số thứ 2 là init = 0.
console.log("result =", result); //* 1000
/*
 * loop 1: x = 0, y = orders[0]
 * 0 + 2 * 250 = 500
 * loop 2: x = 500, y = orders[1]
 * 500 + 1 * 400 = 900
 * loop 3: x = 900, y = orders[2]
 * 900 + 5 * 20 = 1000
 */
