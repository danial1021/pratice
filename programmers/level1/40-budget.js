function solution(d, budget) {
  let answer = 0;
  
  d.sort((a,b) => a-b) // 오름차순 정렬
  .reduce((acc, cur) => {
    acc + cur <= budget ? answer++ : answer;
    return acc + cur
  }, 0);

  return answer
}