function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let a = i + 1; a < numbers.length; a++){
            let sum = numbers[i] + numbers[a];
            if(answer.indexOf(sum) === -1){
                answer.push(sum)
            }
        }
    }
    answer.sort((a,b) => a - b)
    return answer;
}