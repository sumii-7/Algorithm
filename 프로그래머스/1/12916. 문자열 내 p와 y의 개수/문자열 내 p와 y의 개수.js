function solution(s){
    let p = 0;
    let y = 0;
    let lowers = s.toLowerCase()
    for(let i = 0; i <= lowers.length; i++){
        if(lowers[i] === 'p'){
            p++
        }
        if(lowers[i] === 'y'){
            y++
        }
    }
    return (p === y) ? true : false;
}