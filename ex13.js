// 배열 메소드 - concat
console.log("================ concat ================");
var colors = ['black','white','yellow'];
var fruits = ['mango','banana','apple'];

var test = fruits.concat(colors);
console.log(test);

// 배열 메소드  - join
console.log("================ join ================");
var str = fruits.join(",");
console.log(str);

// 배열 메소드 - pop, push : stack 지원
console.log("================ stack ================");
var color = colors.pop();
console.log(color);
console.log(colors);

colors.push("red");
console.log(colors);

// 배열 메소드 - reverse
console.log("================ reverse ================");
console.log(fruits);
fruits.reverse();
console.log(fruits);

// 배열 메소드 - shift
console.log("================ shift ================");
var numbers = [4000, 8000, 3000, 5000, 1000]
console.log(numbers);
numbers.shift();
console.log(numbers);

// 배열 메소드 - sort
console.log("================ sort ================");
console.log(numbers);
numbers.sort();
console.log(numbers);

// 배열 메소드 - slice
console.log("================ slice ================");
var numbers2 = numbers.slice(0, 3);
console.log(numbers);
console.log(numbers2);

// 배열 메소드 - splice
console.log("================ splice ================");
console.log(fruits);
var fruits2 = fruits.splice(0/*index*/, 2/*count*/);
console.log(fruits2);
console.log(fruits);

var at1 = [0, 1, 2, 3, 4]
at1.splice(1, 3, 10);
console.log(at1);

var at2 = [0, 1, 2, 3, 4]
var at3 = at2.splice(1, 1, 10);
console.log(at2);
console.log(at3);

var at4 = [0, 1, 2, 3, 4]
var at5 = at4.splice(1, 0, 10);
console.log(at4);
console.log(at5);