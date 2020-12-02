function solution(strings, n) {
  return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
  // 같다면 전체 문자열로 localeCompare로 사전적 순서로 정렬하고 다르다면 n번째 문자로 사전적 순서로 정렬
}