function solution(s){
  return s.toLowerCase().split("p").length === s.toLowerCase().split("y").length;
  // p와 y을 기준으로 split하는 경우 p와 y가 사라지므로 같은 개수만큼 있다면 남은 문자열의 길이가 같을 것이다.
}