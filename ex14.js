// 배열 확장 : 리스트 메소드 추가하기
Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // - for문 사용
        // for(var i=0; i<value.length; i++){
        //     this.splice(index++, 0,value[i]);
        // } 

        // - forEach함수 사용
        // 함수 안에서 this를 사용하면 전역변수로 넘어갈 수 있다.
        // 해당문제를 해결하기 위한 방법은 클로저와 바인딩이 있다.
        var _this = this; // 클로저
        value.forEach(function(element){
            //this.splice(index++,0,element); // 바인딩 사용
            _this.splice(index++,0,element); // 클로저 사용
        }/*.bind(this) 바인딩*/);
    }else{
        this.splice(index, 0, value);
    }
}

Array.prototype.remove = function(index){
    this.splice(index, 1);
}

// 리스트로 사용하기
var a = [1, 2, 4];
a.insert(2, 3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a','b','c']);  // 기대: [1,2,'a','b','c',3]
console.log(a);              // 결과: [1,2,['a','b','c'],3]
