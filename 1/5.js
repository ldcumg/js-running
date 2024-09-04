const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function 함수명(scores) {
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
  function 계산기(매개변수1, 매개변수2, 매개변수3) {
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
  let realScores = [];
  for (let i = 0; i < scores.length; i++) {
    realScores.push(계산기(scores[i], "+", 3));
  }
  return realScores;
}

console.log(함수명(scores));
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]

// const realScores = scores.map((score) => (score += 3));

// console.log(realScores);
