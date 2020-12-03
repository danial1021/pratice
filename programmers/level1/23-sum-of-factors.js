// solution 1
function solution(n) {
  let answer = 0;
  
  for(let i=1; i<=n; i++) {
      if(n % i == 0) answer += i;
  }
  
  return answer;
}

// solution 2
function solution2(n) {
  // Array 배열로
  // fill 채우자
  // map 하나씩 늘려가면서 채워 => [1,2,3,4 ... n]
  return Array(n).fill().map((v, i) => i + 1).reduce((a, c) => n % c ? a : a + c, 0)
}