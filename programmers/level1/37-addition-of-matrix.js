// solution 1
function solution1(arr1, arr2) {
  var answer = [];

  for(let i=0; i<arr1.length; i++) { // 겉 [[x,x],[x,x]]
    let temp = []; // [x,x] 바뀔 때마다 초기화

    for(let j=0; j<arr1[i].length; j++) { // 속 [x,x], [x,x]
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }

  return answer;
}

//solution 2
function solution2(arr1, arr2) { 
  return arr1.map((e,i) => arr2[i].map((v,j) => arr1[i][j]+arr2[i][j])) 
}