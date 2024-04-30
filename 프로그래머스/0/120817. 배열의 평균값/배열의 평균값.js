function solution(numbers) {
    var answer = 0;
    let plus = 0;
    for(let i = 0; i < numbers.length; i++) {
        plus += numbers[i];
    }
    return answer = plus / numbers.length;
}