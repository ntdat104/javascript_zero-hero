console.log("Bài 10: Dùng function như tham số(parameter) (Callback)");

function notify() {
  console.log("notify được gọi");
}
function taskOne(callback) {
  //! Gọi notify function
  console.log("taskOne được gọi");
  callback();
}
taskOne(notify); //* Truyền function notify dưới dạng biến vào taskOne
