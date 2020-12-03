function solution(num) {
  let answer = 0;
  
  while (num !== 1){ // 1이면 반복문 종료
      if(answer>500){ // 500번째 까지
          return -1
      }
      num%2===0 ? num = num/2 : num=num*3+1 // 짝수인지 홀수인지에 따라 계산을 달리
      answer++;
  }
  
  return answer;
}