function solution(array, commands) {
  var answer = [];
  
  for(let i=0; i<commands.length; i++){
      var list = array
          .slice(commands[i][0]-1 ,commands[i][1]) // slice(a,b)
          .sort((a,b) => a-b); // 오름차순
      
      answer.push(list[commands[i][2]-1]); // push
  }
  return answer;
}