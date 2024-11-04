function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
        answer.push(arr1[i].map((a, b) => arr1[i][b] + arr2[i][b]))
    }
    return answer;
}