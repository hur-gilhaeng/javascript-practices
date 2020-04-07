// 배열 (Array)

// 1. 생성자 함수
console.log("================생성자 함수================");
var a1 = new Array(); // 생성자 함수.
console.log(typeof(a1));

// 배열 초기화
var a2 = new Array(10); // 배열의 크기 지정
console.log(a2.length);

a2[0] = 0;
a2[10] = 10;
a2[11] = 11;
a2[12] = 12;

// 배열 요소에 값을 대입하지 않으면 undfined
console.log(a2[1], a2[2]);

// 배열을 정의할 때 크기 지정은 의미가 없다.
// 동적으로 배열은 늘어 난다.
console.log(a2.length);

console.log("==========================================");

// Array VS Object
a = [];
a[0] = 0;
a["1"] = 1;
a["name"] = 'what is it?';

console.log(a);
console.log(a["0"],a[0],a["name"],a.name, a.length);
for(property in a){
    console.log("prop: "+ property+" / "+typeof(property));
}

console.log("==========================================");

o = {};
o["0"] = 0;
o["1"] = 1;
o["name"] = 'what is it?';

console.log(o);
console.log(o["0"],o[0],o["name"],o.name, o.length);
for(property in a){
    console.log("prop: "+ property+" / "+typeof(property));
}


// 2. 리터럴
console.log("==================리터럴==================");
var a3 = []; // 리터럴
console.log(typeof(a3));

var a4 = [
    function(){
        console.log("hello")
    },
    20,
    "javascript",
    true,
    {
        email: 'kickscar@gmail.com',
        name: '안대혁'
    },
    null,
    undefined
];
console.log(a4.length);
for(var i = 0; i<a4.length; i++){
    console.log(a4[i]);
}

a4[0]();





