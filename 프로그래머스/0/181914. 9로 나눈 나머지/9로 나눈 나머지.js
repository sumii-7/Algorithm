function solution(number) {
    let aa = 0;
    let num = number.split("").map(Number)
    num.forEach((plus)=>{
        aa += plus
    })
    
    return aa%9
}