function solution(N, stages) {
  let answer = [];
  
  // 스테이지 반복
  for (let i = 1; i <= N; i++) {
    // 현재 스테이지에 도달했으나 클리어하지 못한 사람
    let currentStagePlayer = stages.filter(stage => stage === i).length;
    // 현재 스테이지를 도달한 사람
    let overStagePlayer = stages.filter(stage => stage >= i).length;

    answer.push({
      stage: i, // 스테이지
      failure: overStagePlayer ? currentStagePlayer / overStagePlayer : 0 // 실패율
    });
  }
  
  answer = answer.sort((a, b) => {
    // 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록(오름차순)
    if (a.failure === b.failure) {
        return a.stage - b.stage;
    }
    // 실패율 내림차순 정렬
    return b.failure - a.failure;
  }).map(item => item.stage); // stage만 새로 넣어주기
  
  return answer;
}