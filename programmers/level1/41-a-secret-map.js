function solution(n, arr1, arr2) {
  return arr1
  .map((i, index) => ('0'.repeat(n) + (i | arr2[index]).toString(2)).slice(-n))
  // n만큼 0을 반복한 후 2진수로 변환되었을 때 더한다
  // ex) 이런 식으로 맵을 맞춰줄 수 있다
  // 000000 + 1 // 1	=> 000001
  // 000000 + 10 // 2 => 000010
  // 000000 + 100 // 4 => 000100
  .map(i => i.replace(/0/g, ' ').replace(/1/g, '#'));
  // replace 정규식을 활용
}