function solution(arr, divisor) {
  var answer = [];
  
  arr.map((x) => { x % divisor == 0 && answer.push(x); })

  return answer.length ? answer.sort((a,b) => a-b) : [-1];
}
