function solution(n, m) {
  var answer = [];

  answer.push(gcd(n,m))
  answer.push(lcm(n,m))

  return answer;
} 

// 최대공약수
function gcd(minNum, maxNum){
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}

// 최소공배수
function lcm(minNum, maxNum){
  return minNum * maxNum / gcd(minNum, maxNum);
}