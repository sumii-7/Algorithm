function solution(arr, divisor) {
    var answer = [];
    let num = arr.sort((a, b) => a - b)
    for(let i = 0; i < num.length; i++){
       if(num[i] % divisor === 0) {
           answer.push(num[i])
       }
    }
    
    if(answer.length === 0) {
               answer.push(-1)
           }
    
    return answer;
}