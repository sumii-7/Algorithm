function solution(n) {
    var answer = [];
    // 문자열로 변환하여 순서 내림차순 정리
    let string = String(n).split("").reverse()
    // 숫자로 변환하여 배열에 넣기
    for(let i = 0; i < string.length; i++){
        answer.push(Number(string[i]))
    }
    return answer;
}