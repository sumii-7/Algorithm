function solution(n) {
  let stringN = n.toString().split("").sort((a,b) => b - a).join("")
    return Number(stringN)
}