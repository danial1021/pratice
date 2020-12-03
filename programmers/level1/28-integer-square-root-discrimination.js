function solution(n) {
  return (Number.isInteger(Math.sqrt(n))) ? (Math.sqrt(n) + 1) ** 2 : -1
  // Number.isInteger() => 주어진 값이 정수인지 확인합니다.
}