function solution(order) {
    var answer = 0;
    
    for(let count of String(order)){
       if(count === "3" || count === "6" || count === "9") {
           answer++
       }
    }
    return answer
}