function solution(board, moves) {
    const box = [];
    let result = 0;
    
    moves.forEach(move => {
        const doll = pickup(board, move-1);
        if(doll){
            if(box[box.length-1] === doll){
                box.pop();
                result += 2; // 이전 인형을 삭제하고 + push를 안한다
            }else{
                box.push(doll);
            }
        }
    });
    return result;
}

function pickup(board, index){
    const newBoard = board;
    
    for(let i = 0; i < newBoard.length ; i++){
        if(newBoard[i][index] !== 0){ // 칸이 비어있지 않으면
            const doll = newBoard[i][index]; // 변환된 보드 채우기
            
            newBoard[i][index]= 0; // 뽑힌 인형 삭제
            return doll;
        }
    }
}