const student = {
  name: "yuno",
  age: "30",
  skill: ["javascript"],
  address: {
    city: "seoul",
  },
};

// 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
const shallowCopy = student;

// 깊은 복사를 수행하여 deepCopy를 만들어주세요.
const deepCopy = JSON.parse(JSON.stringify(student));

// 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
console.log(student === shallowCopy);

// 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log(student.address === shallowCopy.address);

// 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
console.log(student === deepCopy);

// 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log(student.address === deepCopy.address);

2;
// 동일한 student로 진행합니다.

// 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요
shallowCopy.skill.splice(0,1,'js');
// 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)
deepCopy.address.city="busan";
// 결과 확인
console.log("5. 원본 객체(student):", student);
console.log("6. 얕은 복사된 객체(shallowCopy):",shallowCopy);
console.log("7. 깊은 복사된 객체(deepCopy):",deepCopy);

/* 1~7번까지 출력값을 출력해보고 적어주세요
예 ) 1. true 
	... 
     5. {
	  name : ... ,
          agae : ... , 
	  skill : ...,
	  ....
        }
*/
