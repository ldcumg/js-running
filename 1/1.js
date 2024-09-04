1.
let uninitialized;
console.log(uninitialized); // 결과값 undefined, 함수를 선언하기만하고 할당하지 않았다.


2.
let apple = "사과";// 재할당 할 수 있는 선언문인 let이 필요하다.
apple = "바나나"; // TypeError: Assignment to constant variable 


3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 19, 배열은 인덱스값이 0부터 시작하므로 4번째에 있는 19가 출력된다.


4. 
let mySchedule = "";
console.log(mySchedule || false); // false, 빈 문자열은 false한 값이므로 우변이 출력된다.
console.log(!!mySchedule); // 빈문자열은 false를 반환하는데 부정을 부정하므로 false가 그대로 출력된다.
