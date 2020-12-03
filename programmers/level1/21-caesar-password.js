function solution(s, n) {
  return s.split('').map(e => {
    if (e == ' ') return e; // 공백은 그대로
    
    let ascii = e.charCodeAt(); // 아스키코드 번호로 변환
    let upper = (ascii <= 90); // 대문자 65 ~ 90
    ascii += n; // n만큼 밀기
    
    if(!upper && ascii > 122) ascii = ascii - 122 + 96; // 소문자 밀기 적용
    else if(upper && ascii > 90) ascii = ascii - 90 + 64; // 대문자 밀기 적용

    return String.fromCharCode(ascii); // 문자열로 변환
  }).join('');
}