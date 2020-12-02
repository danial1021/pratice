function solution(s) {
  let len = s.length;
  
  if(len % 2 == 0) { // 짝수
      let center = s.slice(len/2-1,len/2+1);
      return center;
  }else { // 홀수
      let center = s.slice(len/2, len/2+1);
      return center;   
  }
}