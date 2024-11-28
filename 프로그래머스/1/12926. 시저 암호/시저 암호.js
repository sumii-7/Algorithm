function solution(s, n) {
    var answer = '';
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = upper.toLowerCase()
    
    for(let i = 0; i < s.length; i++){
        let text = s[i];
        if(text == " "){
            answer += " ";
            continue
        }
        
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text) + n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index]
    }
    
    return answer
}