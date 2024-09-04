class Tutor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `안녕하세요. 저는 ${this.name} 튜터이고, 나이는 ${this.age}살 입니다.`
    );
  }
}

let junhyun = new Tutor("김준현", 120000);
junhyun.introduce();
