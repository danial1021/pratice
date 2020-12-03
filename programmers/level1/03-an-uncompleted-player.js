function solution(participant, completion) {
  // 정렬하여서 for문 한 개로 해결
  participant.sort();
  completion.sort();
  
  for(let i=0; i<participant.length; i++) {
    if(participant[i] !== completion[i]) {
      // 두 배열을 비교 연산 결과가 거짓일 때 비완주자가 나오게 된다
      return participant[i] 
    }
  }
}