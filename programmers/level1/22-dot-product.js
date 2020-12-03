// solution 1
function solution1(a, b) {
  let answer = 0;
  
  for(let i=0; i<a.length; i++) {
    answer = answer + a[i] * b[i];
  }

  return answer;
}

// solution 2
function solution2(a, b) {
    return a.reduce((acc, cur, i) => acc += a[i] * b[i], 0);
    // 배열.reduce((누적값, 현재값, 인덱스, 요소) => {return 결과}, 초기값);
}