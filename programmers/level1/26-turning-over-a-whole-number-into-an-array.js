function solution(n) {
  return String(n).split('').reverse().map(v => parseInt(v))
}