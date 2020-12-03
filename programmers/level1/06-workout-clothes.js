function solution(n, lost, reserve) {
    let answer = 0;
    let uniform = [];
    
    // 체육복을 1벌씩 가지고 있음
    for(let i=0; i<n; i++) {
        uniform[i] = 1;
    }
    // 도난당한 사람은 체육복이 0개
    for(let i=0; i<lost.length; i++) {        
        uniform[lost[i]-1] = 0;
    }
    // 여벌을 가지고 있는 사람은 +1개
    for(let i=0; i<reserve.length; i++) {
        uniform[reserve[i]-1] += 1;
    }
    
    for(let i=0; i<n; i++) { // 체육복이 0개일 경우 빌릴수 있는지 확인
        if (uniform[i] == 0 && uniform[i-1] == 2) { // 앞번호 체육복을 빌리는 경우
            uniform[i-1] = 1; 
            uniform[i] = 1;
        } else if (uniform[i] == 0 && uniform[i+1] == 2) { // 뒷번호 체육복을 빌리는 경우
            uniform[i] = 1;
            uniform[i+1] = 1;
        }
    }
    
    for(let i=0; i<n; i++) {
        if (uniform[i] > 0) { // 체육복이 1개 이상 가진 경우
            answer++; // 수업 참여 가능 인원 카운트
        }
    }
    
    return answer;
}