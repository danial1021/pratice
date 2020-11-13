// 4. 인터페이스
// Javascript는 인터페이스를 지원 안함
// Typescirpt는 자체적으로 인터페이스 기능을 제공함 (interface, implements 키워드) -> 개발 생산성 향상

// 4-1. 커스텀 타입으로 사용하기
interface IPseron {
  name: string;
  age: number;
  ssn?: string;
}

class Person {
  constructor (public config: IPseron) {
    //
  }
}

// IPerson 형태에 맞게 객체 생성 (객체 리터럴 문법)
let aPerson : IPseron = {
  name: 'Kang',
  age: 1
}

let p = new Person(aPerson);
console.log(p.config.name);

let anEmployee : IPseron = {
  name: 'Kang',
  age: 11,
  location: 'Seoul'
}

// 4-2. 추상클래스로 사용하기
// 메서드 형태만 선언해서 인터페이스 정의, 이후엔 클래스 정의할 때 implements 키워드 사용하면서 인터페이스 지정 -> 추상함수로 선언된 메소드의 몸체를 모두 정의해야함
interface IPayable {
  increasePay (percent: number) : boolean
}

class Person {
  //
}

class Employee extends Person implements IPayable [
  increasePay (percent: number) : boolean {
    //
  }
]
// Employee -> Person 클래스을 상속 받고 IPayable 인터페이스를 기반으로 정의함


// 4-3. 실행할 수 있는 인터페이스 (callable interface)
// 인터페이스의 메서드를 정의할 때 익명 함수 사용 -> 실행할 수 있는 인터페이스를 정의할 수 있음
interface IPayable {
  (percnet: number) : boolean;
}

class Person {
  constructor (private validator : IPayable) {
    //
  }

  increasePay (percent: number) : boolean {
    return this.validator(percent);
  }
};
// Person -> IPayable 인터페이스를 인자로 받음
// this.validator -> Person 클래스 생성장에 인자로 전달된 IPayable 인터페이스의 익명 함수를 가리킴
