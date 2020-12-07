function solution(dartResult) { 
    let resultArr = dartResult.match(/\d{1,2}[SDT]{1}[*|#]?/g );
    // /d{1,2} 횟수가 두 개이므로 10까지 가능
    // [SDT]{1} 대괄호 안의 SDT 한 번(횟수)
    // [*|#]? *,# 중에 1회 가능
    // /g  전역 검색, 첫 번째 일치 결과에서 멈추지 않고 전체 문자열에 대해 패턴 검색 

    let score = [];
    let answer = 0;
    
    for(let i=0; i<3; i++) {
        let num = resultArr[i].match(/\d{1,2}/g);
        let bonus = resultArr[i].match(/[SDT]{1}/g);
        let option = resultArr[i].match(/[*|#]/g);
        
        if(bonus == "S"){
            num = parseInt(num);
        } else if(bonus == "D"){
            num = num * num;
        } else if(bonus == "T"){
            num = num * num * num;
        } 
        
        if(option == "*"){
            num = num * 2;
            if(i != 0){
                score[i-1] = score[i-1] * 2;
            }
        } else if(option == "#"){
            num = num * (-1);
        }
        
        score.push(num);
    } 
    answer = score.reduce((a,b) => a + b);

    return answer;
}