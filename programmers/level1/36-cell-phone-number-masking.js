function solution(phone_number) {
  return "*".repeat(phone_number.length-4) + phone_number.substring(phone_number.length-4)
  // *을 폰번호 길이-4(뒷자리 빼고)만큼 반복 + 뒷자리 뺀 만큼부터 끝까지 번호 추가
}