function solution(arr) {
    let plus = 0;
    for(let i = 0; i < arr.length; i++){
        plus += arr[i]
    }
    return plus / arr.length;
}