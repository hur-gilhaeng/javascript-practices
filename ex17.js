// Date

// 현재시간
var now = new Date();
console.log(now);

// 2020년 4월 7일
var d = new Date(2020, 3/*month-1*/, 7);
console.log(d);

// 2020년 4년 7일
var d = new Date(2020, 3/* month-1 */, 7, 12, 30, 40);
console.log(d);

// 객체 메서드
console.log(
    // "년도:" + (d.getYear() + 1900) + "\n" +
    "년도:" + now.getFullYear() + "\n" +
    "월:" + (now.getMonth()+1 )+ "\n" +
    "일:" + now.getDate() + "\n" +
    "시:" + now.getHours() + "\n" +
    "분:" + now.getMinutes() + "\n" +
    "초:" + now.getSeconds() + "\n" +
    "밀리 초:" + now.getMilliseconds() + "\n");

d.setFullYear(2021);
console.log(d);
d.setMonth(11); //12월
console.log(d);
