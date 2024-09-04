// 1.출력값과 출력되는 값의 이유를 설명해주세요
var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name); //yuno2, 스코프체인에 의하여 상위 스코프인 function myName에서 정의한 name이 출력된다.
  }
  return a();
}

myName();

// 2. 출력값과 출력되는 값의 이유를 설명해주세요
function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);// 2, if문의 조건식이 truthy한 값이여서 var x=2가 재선언, 재할당 되어 x는 2가 출력된다.
}

test();

// 3. 화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`); //yuno, 화살표함수는 this를 따로 바인딩하지 않으므로 상위 스코프에서 정의된 값인 yuno를 출력한다.
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`); //일반함수이므로 this가 전역객체를 가리키게 된다.
    }
    arrow();
    normal();
  },
};

nameObj.method();
