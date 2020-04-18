console.log("Bài 17: Prototypes trong Javascript (Nguyên mẫu trong Javascript)");

function Mouse(color, weight) {
  this.type = "mouse";
  this.color = color;
  this.weight = weight;
  /*
   * this.sleep = function(){
   *     console.log("Sleeping ...");
   * }
   */
}
console.log(Mouse);
console.log(Mouse.prototype);
console.log(Mouse.prototype.constructor);
console.log(Mouse.prototype.constructor === Mouse);

Mouse.prototype.sleep = function () {
  //! dùng cách này tiết kiệm bộ nhớ hơn
  console.log(this.color, "Sleeping ...");
};

console.log(Mouse);

var jerry = new Mouse("orange", 20);
console.log("jerry =", jerry);
jerry.sleep();

var mickey = new Mouse("white", 10);
mickey.sleep();

console.log(jerry.sleep === mickey.sleep);
