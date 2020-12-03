function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let now = new Date(`2016,${a},${b}`);
  return days[now.getDay()];
}