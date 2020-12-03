function solution(arr) {
  return arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1) > 0 ? arr : [-1];
  // indexOf와 Math.min.apply를 활용하여 최소값의 index를 구함
  // 구한 index를 splice에 사용하여 배열에서 삭제
}