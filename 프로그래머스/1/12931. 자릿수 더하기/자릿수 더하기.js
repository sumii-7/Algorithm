function solution(n)
{
    var answer = 0;
    let ex = String(n);
    
    for(let i = 0; i < ex.length; i++) {
        answer += parseInt(ex[i]);
    }

    return answer;
}