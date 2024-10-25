function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++){
        let arr = [];
        for(let a = 0; a <= i; a++){
            if(i % a === 0){
            arr.push(a) 
            }
        }
        answer += arr.length % 2 === 0 ? i : -i
    }
    return answer;
}