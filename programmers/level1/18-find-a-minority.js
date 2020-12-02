function solution(n) {
  let answer = 0;
  let arr = [];
  
  // 초기화
  for(let i=2; i<=n; i++) {
      arr[i] = i; 
  } 
  
  for(let i=2; i<=n; i++) {
      if(arr[i] === 0) continue; // 이미 지워진 값은 그냥 넘어감
      for(let j=i+i; j<=n; j+=i) { // 현재 수의 배수부터 시작하여 끝까지 돌면서 지움
          arr[j] = 0; 
      } 
  } 
  
  for(let i=2; i<=n; i++) { // 지워진 수를 제외한 수만 골라서 카운트함
      if(arr[i] !== 0) answer++; 
  } 
  
  return answer;
}