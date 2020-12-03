function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i+1) * v)
  // Array fill map을 사용하면 숫자로 부터 배열을 쉽게 만들 수 있음
}