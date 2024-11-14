function solution(s) {
    var answer = '';
    let str = s.split(" ");
   for(let i = 0; i < str.length; i++){
       for(let a = 0; a < str[i].length; a++){
           if(a % 2 === 0){
               answer += str[i][a].toUpperCase();
           }else {
               answer += str[i][a].toLowerCase();
           }
       }
       if(i < str.length -1){
           answer += " ";
       }
   }
    return answer;
}