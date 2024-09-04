function 함수명(매개변수1, 매개변수2, 매개변수3) {
    // 코드를 작성해주세요.
    switch (매개변수2) {
        case "+":
            return 매개변수1 + 매개변수3;
        case "-":
            return 매개변수1 - 매개변수3;
        case "*":
            return 매개변수1 * 매개변수3;
        case "/":
            return 매개변수1 / 매개변수3;
        default:
            return console.log("연산자를 다시 확인해주세요");
    }
}
console.log(함수명(3, "+", 6));
console.log(함수명(11, "-", 6));
console.log(함수명(6, "*", 3));
console.log(함수명(15, "/", 3));

console.log(함수명(15, "%", 3));

함수명(3, "+", 6); // 결과값 9
함수명(11, "-", 6); // 결과값 5
함수명(6, "*", 3); // 결과값 18
함수명(15, "/", 3); // 결과값 5
