function solution(n) {
    var answer
    let sqrt = Math.sqrt(n)
    if(sqrt % 1 === 0) {
        let ee = sqrt + 1
        answer = ee * ee
    }else{
        answer = -1
    }
    return answer
}