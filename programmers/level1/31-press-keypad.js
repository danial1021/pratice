function solution(numbers, hand) {
    
  function dis(num, lH, rH, pos, hand) { 
    // 누르려는 수, 왼손의 현 위치, 오른손의 현 위치, 좌표, 왼손/오른손잡이의 여부

    const lD = Math.abs(pos[lH][0] - pos[num][0]) + 
        Math.abs(pos[lH][1] - pos[num][1])
    // 왼손 현 위치에서 목표점까지의 x축과 y축의 거리
    
    const rD = Math.abs(pos[rH][0] - pos[num][0]) + 
        Math.abs(pos[rH][1] - pos[num][1])
    // 오른손 현 위치에서 목표점까지의 x축과 y축의 거리
    
    if (lD === rD) return hand === 'left' ?  'L' : 'R';
    return lD < rD ? 'L' : 'R'
    // 만약 거리가 동일하다면 무슨 손잡이인지 확인
  }

  // 1 ~ #까지를 좌표화한 객체를 생성
  const pos = {
      1: [0, 0], 2: [0, 1], 3: [0, 2],
      4: [1, 0], 5: [1, 1], 6: [1, 2],
      7: [2, 0], 8: [2, 1], 9: [2, 2],
      '*': [3, 0], 0: [3, 1], '#': [3, 2]
  };
  var lH = '*', rH = '#'; // 왼손, 오른손 위치 초기화
  var result = ''

  for (let num of numbers) { // numbers의 길이만큼 반복
      if (num % 3 === 1){ // 1, 4, 7 일 경우 L을 더해주고 위치 갱신
          result += 'L';
          lH = num;
      }
      else if (num !==0 && num % 3 === 0){ // 3, 6, 9 일 경우 R을 더해주고 위치 갱신
          result += 'R';
          rH = num;
      }
      else{ // dis 함수를 이용하여 위치를 구함
          result += dis(num, lH, rH, pos, hand)
          result[result.length-1] === 'L'? lH = num : rH = num
      }
  }

  return result;
}