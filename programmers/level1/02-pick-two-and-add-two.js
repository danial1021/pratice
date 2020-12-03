function solution(numbers) {
  var answer = [];

  for(let i=0; i<numbers.length; i++) { // 전체 배열
    for ( let j=i+1; j<numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if(answer.indexOf(sum) === -1) { // indexOf 는 찾은 값의 첫번째 원소의 위치를 반환해주며, 없을경우 -1을 리턴합니다.
        answer.push(sum);
      }
    }
  }
  answer.sort((a,b) => a-b) // a-b 함수를 sort에 넣어서 오름차순
  return answer;
}