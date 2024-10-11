function solution(n)
{
    var answer = 0;
    let string = String(n)
    for(let i = 0; i < string.length; i++){
        answer += Number(string[i])
    }
   return answer
}