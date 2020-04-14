console.log("Bài 8: Vòng lặp for (for loop)");

//TODO Lặp thông thường.
for (var i = 0; i <= 4; i++) {
  console.log("i =", i);
}
console.log("Giá trị của i sau khi chạy xong vòng lặp, i =", i);

//TODO Lặp trong 1 array (for/of)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits =", fruits);

//* Cách 1
for (var fruit of fruits) {
  //! Lặp trong một array.
  console.log(fruit);
}
//* Cách 2
for (var i = 0; i < fruits.length; i++) {
  console.log(i + ".", fruits[i]);
}

//TODO Lặp trong 1 object (for/in)
var scores = {
  maths: 9,
  physics: 8,
  chemistry: 10,
  english: 9,
};
console.log("scores =", scores);
for (var key in scores) {
  //! Lặp trong một object.
  console.log(key + " =", scores[key]);
}

//TODO Nâng cao: lặp trong 1 array lồng object (for/of + for/in)
var persons = [
  { name: "Dat", age: 20 },
  { name: "Binh", age: 19 },
  { name: "Tuan Anh", age: 18 },
];

for (var person of persons) {
  //! Lặp trong một array.
  console.log(person.name, person.age);
}
for (var person of persons) {
  //! Lặp trong một array.
  for (var key in person) {
    //! Lặp trong một object.
    console.log(key + " =", person[key]);
  }
}

//TODO Nâng cao: lặp trong 1 object lồng object (for/in)
//? Bài toán tính điểm trung bình:
function calAverage() {
  var count = 0;
  var totalScores = 0;
  for (var key in this.scores) {
    //! Lặp trong một object.
    count += 1;
    totalScores += this.scores[key];
    console.log(
      "key = " + key,
      "count = " + count,
      "totalScores = " + totalScores
    );
  }
  return totalScores / count;
}

var person = {
  name: "Dat",
  age: 20,
  scores: {
    maths: 9,
    physics: 8,
    chemistry: 10,
    english: 7,
  },
  calAverage: calAverage,
};

var result = person.calAverage();
console.log("result =", result);
