alert('Hello, world!')
console.log('Hello,world!')

let name = "John";
alert(`Hello, ${name}!`);
alert(`the result is ${1 + 2}`);

let age0 = prompt('나이를 입력해주세요.', 100);
alert(`당신의 나이는 ${age}살 입니다.`);

// 형변환
let a = "3";
let b = "7";
alert(typeof a);
alert(typeof b);
alert(+a + +b); // a, b를 숫자로 바꿔서 더함 -- 명시적으로 바꾸는 게 확실
alert(a + b); // 문자+ 문자 concatenation

// 다중?
let age = prompt('나이를 입력해주세요.', 18);

let message = (age <3) ? '아기야 안녕' :
    (age < 18) ? '안녕!' :
    (age < 100) ? '환영합니다!' :
    '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
    alert(message);

// nullish 연산자
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛
