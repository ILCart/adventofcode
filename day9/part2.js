const input = 
`0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`

let histories = input.split("\n").map(x=>x.split(" "));
console.log(histories);


function sequence(seq,last=[seq.map(x=>+x)]){
    let diffs = [];
    for (let i = 0; i < seq.length; i++) {
        const diff = seq[i+1] - seq[i];
        if(isNaN(diff)) break;
        diffs.push(+diff)
        //console.log(seq[i],diff);
    }
    last.push(diffs)
    if(diffs.some(x=>x!=0)){
        //console.log("e",diffs)
        return sequence(diffs,last);
    }
    
    return last
}

function extrapolate(seq,stage1,stage2){
    if(seq[stage2] == null || seq[stage1] == null) return
    return seq[stage2].unshift(seq[stage1][seq[stage1].length-1]+seq[stage2][seq[stage2].length-1])
}
let total = 0;
histories.forEach(history=>{
    let seq = sequence(history).reverse();
    seq[0].unshift(0)
    for (let i = 0; i < seq.length; i++) {
        extrapolate(seq,i,i+1);
    }
    console.log(seq)
    // extrapolate(seq,0,1);
    // extrapolate(seq,1,2);

    // seq[1].push(seq[1][seq[1].length-1]+seq[0][seq[0].length-1])
    // seq[2].push(seq[2][seq[2].length-1]+seq[1][seq[1].length-1])
    total+=seq.reverse()[0][seq[0].length-1];
    // for (let i = 0; i < history.length; i++) {
    //     const diff = history[i+1] - history[i];
    //     if(!diff) break;
    //     console.log(history[i],diff);
    // }
})
console.log(total)