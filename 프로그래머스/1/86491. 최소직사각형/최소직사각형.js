function solution(sizes) {
    let row = Math.max(sizes[0][0], sizes[0][1]);
    let col = Math.min(sizes[0][0], sizes[0][1]);
    
    for(let i = 1; i < sizes.length; i++){
        let max = Math.max(sizes[i][0], sizes[i][1]);
        let min = Math.min(sizes[i][0], sizes[i][1]);
        if(row < max) {
            row = max;
        }
        if(col < min) {
            col = min;
        }
    }
    return row * col;
}