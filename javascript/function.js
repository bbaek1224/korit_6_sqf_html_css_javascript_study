function add(x, y) {
    return x + y;
}

const result = add(10, 20);
console.log(result);

function add(x, y, z) {         // 자바스크립트는 오버로딩 안됨.
    console.log(x);
    console.log(y);
    console.log(z);
}

add(10, 20, 30);