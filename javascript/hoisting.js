console.log(a);

var a;

a = 10;

var b = 10;
console.log(b);

var b = 20;     // 재선언 재할당 안쓰는게 베스트
console.log(b);

let c = 30;     // 재선언 불가능, 재할당 가능
console.log(c);
c = 40; // 가능     // let c = 40; -> 불가능

const d = 50;   // 재선언 재할당 불가능
console.log(d);