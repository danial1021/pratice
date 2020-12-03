function solution(s) {
  return s.split(' ').map(w => ( // 공백에 따라서 한번 자름
    w.split('').map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase())).join('')
    // 문자마다 자름
    // 짝수면 대문자로 : 0, 홀수면 소문자로 : 1
  )).join(' ');
}