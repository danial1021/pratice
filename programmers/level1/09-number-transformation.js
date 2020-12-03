function solution(n) {
  const str = n.toString(3).split('').reverse().join('');
  const decimal = parseInt(str, 3);
  
  return decimal;
}