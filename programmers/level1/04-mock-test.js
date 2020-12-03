function solution(answers) {
  var answer = [];
  var answer1 = [1,2,3,4,5];
  var answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var score = [0,0,0];
  
  for(let i=0; i<answers.length; i++) {
      if(answers[i] === answer1[i%5]) score[0]++;
      if(answers[i] === answer2[i%8]) score[1]++;
      if(answers[i] === answer3[i%10]) score[2]++;
  }

  var max = Math.max.apply(null, score);
  
  for(let i=0; i<score.length; i++){
      if(max === score[i])
          answer.push(i+1);
  }
  
  return answer;
}