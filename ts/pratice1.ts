// 1. 타입 지정
let name1 = 'king';
// let name2 : string = 'king';
let name2 : any = 'king';
name2 = 123;


// 1-1. 함수
// function test (name: string, money: number): number {
//   return money
// }
// let result : string = test('kang', 1);


// 1-2. 인자 기본값
function test1(name: string, money: number = 123) : number {
  return money
}
let result1 : number = test1('kang', 111);
let result2 : number = test1('kang');


// 1-3. 옵션 인자
function test2 (name: string, money? : number) : number {
//
  if(money) {
    //
  }else {
    //
  }
}


// 1-4. 화살표 함수 표현식
function test3 (symbol : string) {
  this.symbol = symbol;

  setInterval(() => {
    console.log('test3', this.symbol);
  }, 1000);
}
let result3 = new test3('kang');