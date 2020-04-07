// 함수 객체를 생성하는 방법1
function f1(a, b){
    return a + b;
}
console.log(typeof(f1), f1(10,20));

// 함수 객체를 생성하는 방법2 : 리터럴
var f2 = function(a,b){
    return a + b;
}
console.log(typeof(f2), f2(10,20));

// 함수 객체를 생성하는 방법3 : new 연산자 생성자 함수
var f3 = new Function('a','b','return a + b;')
console.log(typeof(f3), f3(10,20));

// 함수 객체를 생성하는 방법4 : 익명(Anonymous) 함수
// callback
setTimeout(function(){
    console.log("time out!");
}, 1000);

// 즉시 실행 함수
var sum = (function(a, b){  
    return a + b;
})(10, 20);
console.log(sum);

// 가변 변수
var sum2 = function(){
    var result = 0;
    // for(var i=0; i<arguments.length; i++){
    //     result += arguments[i];
    // }
    Array.prototype.forEach.call(arguments, function(element){
        result += element;
    });

    return result;
}

console.log(sum2(1,2));
console.log(sum2(1,2,3));
console.log(sum2(1,2,3,4));
console.log(sum2(1,2,3,4,5));

// 아래의 구문이 출력될 때에도 위의 setTimeout이 아직 남음.(비동기)
console.log("test end...."); 