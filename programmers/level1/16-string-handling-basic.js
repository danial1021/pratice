function solution(s) {
  return /^\d{6}$|^\d{4}$/.test(s);
  // javascript 정규표현식 활용
  // ^: 시작, $: 끝
  // /d => [0-9]
}