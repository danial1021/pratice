// 2. 클래스
// class Person {
//   name: string;
//   age: number;
// }

// var p = new Person();

// p.name = 'kang';
// p.age = 1;

class Person {
  name: string;
  age: number;

  constructor( name: string, age: number ) {
    this.name = name;
    this.age = age;
  }
}

var p = new Person('Kang', 1);


// 2-1. 접근 제한자
class Person {
  public name: string;
  public age: number;
  private _ssn: string;

  constructor( name: string, age: number; ssn: string) {
    this.name = name;
    this.age = age;
    this._ssn = ssn;
  }
}

// var p = new Person('Kang', 1, '1234');
// console.log(p._ssn); // 클래스 밖에서 호출하므로 에러


// 2-2. 메소드
class testClass {
  doSomething (times: number) : void {
    console.log(times);
  }
}

let tc = new testClass();
tc.doSomething(11);

class Person {
  constructor( public name: string, public age: number. private _ssn?: string ) {
  }
  get ssn() : string {
    return this._ssn;
  }

  set ssn(value : string) : string {
    return this._ssn = value;
  }
}

var p = new Person('Kang', 1);
p.ssn = '1234'; // setter 실행됨


// 2-3. 상속
class Employee extends Person {
  location: string;

  constructor( name: string, age: number, _ssn: string, location: string) {
    super(name, age, _ssn);
    this.location = location;
  }
}